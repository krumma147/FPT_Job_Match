using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages;
using System.Data;
using System.Net;
using System.Security.Claims;
using System.Text;
using TestAPI.Models.Auth;
using TestAPI.Services;
using TestAPI.Services.Email;
using TestAPI.Services.HubService;
using TestAPI.Services.Token;

namespace TestAPI.Controllers.Auth
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IAuthService _authService;
        private readonly IEmailService _emailService;
        private readonly IOTPService _otpService;
        private readonly ITokenService _tokenService;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly IHubContext<ServiceHub> _hubContext;

        public AuthController(IAuthService authService, IEmailService emailService, UserManager<IdentityUser> userManager, IOTPService otpService, ITokenService tokenService, SignInManager<IdentityUser> signInManager, RoleManager<IdentityRole> roleManager, IHubContext<ServiceHub> hubContext)
        {
            _authService = authService;
            _emailService = emailService;
            _userManager = userManager;
            _otpService = otpService;
            _tokenService = tokenService;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _hubContext = hubContext;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> RegisterUser(LoginUser user)
        {
            var existingUser = await _userManager.FindByEmailAsync(user.Email);
            if (existingUser != null)
            {
                return BadRequest(new { status = false, message = "Error, email already in use!" });
            }

            if (await _authService.RegisterUser(user))
            {
                try
                {
                    var identityUser = await _userManager.FindByEmailAsync(user.Email);
                    await SendConfirmationEmail(user.UserName, identityUser);
                    // Check if the selected role is valid
                    if (user.Role != "JobSeeker" && user.Role != "Employer")
                    {
                        return BadRequest(new { status = false, message = "Invalid role selected" });
                    }

                    // Get the selected role
                    var selectedRole = await _roleManager.FindByNameAsync(user.Role);
                    if (selectedRole != null)
                    {
                        // Add the user to the selected role
                        var result = await _userManager.AddToRoleAsync(identityUser, selectedRole.Name);
                        if (!result.Succeeded)
                        {
                            // Log the error
                            // _logger.LogError("Failed to add user to selected role");
                            return BadRequest(new { status = false, message = "Error adding user to selected role" });
                        }
                    }
                    // After the user has been successfully registered, send a notification to all connected clients
                    await _hubContext.Clients.All.SendAsync("createdUser", user);
                    return Ok("Create user successful! Please click on the link in the email to confirm your account.");
                }
                catch (Exception ex)
                {
                    // Log the exception
                    // _logger.LogError(ex, "Error sending confirmation email");

                    return BadRequest(new { status = false, message = "Error sending confirmation email" });
                }
            }
            return BadRequest(new { status = false, message = "Error, email already in use exist!" });
        }


        [HttpGet("ConfirmEmail")]
        public async Task<IActionResult> ConfirmEmail(string userName, string token)
        {
            // Decode the userName
            var base64EncodedBytes = Convert.FromBase64String(userName);
            var decodedUserName = Encoding.UTF8.GetString(base64EncodedBytes);

            var result = await _authService.ConfirmEmailAsync(decodedUserName, token);
            if (result)
            {
                return Redirect("http://localhost:3000/signin?confirmEmail=true");
            }
            return BadRequest("Error confirming email");
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginRequest user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { status = false, message = "User not Found", user = ModelState });
            }
            var loginResult = await _authService.Login(user);
            if (!loginResult)
            {
                return BadRequest(new { status = false, message = "User not Found" });
            }
            var identityUser = await _userManager.FindByNameAsync(user.UserName);

            if (identityUser == null)
            {
                return BadRequest("User not Found");
            }

            //Add check exist account with password

            if (!identityUser.EmailConfirmed)
            {
                if (user != null)
                {
                    await SendConfirmationEmail(user.UserName, identityUser);
                }
                return BadRequest("Email not confirmed. A confirmation email has been sent.");
            }

            // Generate OTP
            if (identityUser.TwoFactorEnabled)
            {
                var otp = _otpService.GenerateOTP();
                await _userManager.SetAuthenticationTokenAsync(identityUser, "2FA", "OTP", otp);
                await _emailService.SendEmailAsync(user.UserName, "Your OTP", $"Your OTP is {otp}");

                return Ok(new { Message = "OTP has been sent to your email. Please verify it." });
            }

            // Get user roles
            var roles = await _userManager.GetRolesAsync(identityUser);

            // Generate token with roles
            var tokenString = _authService.GenerateTokenString(user.UserName, roles, identityUser.Id);

            return Ok(new { Message = "Login Success!", Token = tokenString });
        }

        [HttpPost("Login-2FA-Email")]
        public async Task<IActionResult> loginOTPEmail(VerifyUser userFA)
        {
            var user = await _userManager.FindByNameAsync(userFA.UserName);
            var storedOtp = await _userManager.GetAuthenticationTokenAsync(user, "2FA", "OTP");

            if (storedOtp != userFA.otp)
            {
                // OTP does not match
                return BadRequest("Invalid OTP.");
            }

            // Get user roles
            var roles = await _userManager.GetRolesAsync(user);

            var tokenString = _authService.GenerateTokenString(userFA.UserName, roles, user.Id);
            return Ok(new { Message = "Login Success!", Token = tokenString });
        }

        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            // Get the token from the Authorization header
            var authHeader = Request.Headers["Authorization"].ToString().Split(' ');
            if (authHeader.Length < 2)
            {
                // Handle the case where the token is missing
                return BadRequest("Token is missing");
            }
            var token = authHeader[1];


            // Invalidate the token
            var result = await _tokenService.InvalidateToken(token);

            if (result)
            {
                return Ok(new { message = "Logout successful" });
            }

            return BadRequest(new { message = "Error logging out" });
        }


        private async Task SendConfirmationEmail(string userName, IdentityUser identityUser)
        {
            // Generate confirmation token
            var emailConfirmationToken = await _userManager.GenerateEmailConfirmationTokenAsync(identityUser);

            // Encode the userName
            var plainTextBytes = Encoding.UTF8.GetBytes(userName);
            var encodedUserName = Convert.ToBase64String(plainTextBytes);

            // Generate email confirmation link
            var emailConfirmationLink = Url.Action(nameof(ConfirmEmail), "Auth", new { userName = encodedUserName, token = emailConfirmationToken }, Request.Scheme);
            //var emailConfirmationLink = $"http://localhost:3000/signin?confirmEmail=true";

            string emailSubject = "Confirm your email";
            string emailContent = $"<h1>Welcome to our application!</h1><p>Thank you for registering. Please click the following <a href='{emailConfirmationLink}'>Click Here</a> to confirm your account...";

            await _emailService.SendEmailAsync(userName, emailSubject, emailContent);
        }

        [HttpPost("ForgotPassword")]
        public async Task<IActionResult> ForgotPassword([FromBody] Models.Auth.ForgotPassword model)
        {
            var user = await _userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                // Don't reveal that the user does not exist
                return BadRequest("Invalid user");
            }

            var token = await _userManager.GeneratePasswordResetTokenAsync(user);
            var encodedUserIdAndToken = Convert.ToBase64String(Encoding.UTF8.GetBytes($"{user.Id}:{token}"));
            //var callbackUrl = Url.Action(nameof(ResetPassword), "Auth", new { id = encodedUserIdAndToken }, protocol: HttpContext.Request.Scheme);
            //var callbackUrl = Url.Action(nameof(SignIn), "Auth", new { resetPassword = true, id = encodedUserIdAndToken }, protocol: HttpContext.Request.Scheme);
            var callbackUrl = $"http://localhost:3000/signin?resetPassword=true&id={encodedUserIdAndToken}";

            string emailSubject = "Reset Password";
            string emailContent = $"Please reset your password by clicking <a href='{callbackUrl}'>here</a>";

            await _emailService.SendEmailAsync(model.Email, emailSubject, emailContent);

            return Ok("Your request has been successful. Please check your email to reset your password");
        }

        [HttpPut("ResetPassword/{id}")]
        public async Task<IActionResult> ResetPassword(string id, [FromBody] ResetPasswordModel model)
        {
            id = WebUtility.UrlDecode(id);
            var decodedUserIdAndToken = Encoding.UTF8.GetString(Convert.FromBase64String(id));
            var userId = decodedUserIdAndToken.Split(':')[0];
            var token = decodedUserIdAndToken.Split(':')[1];

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                // Don't reveal that the user does not exist
                return BadRequest("Invalid user");
            }

            var result = await _userManager.ResetPasswordAsync(user, token, model.NewPassword);
            if (result.Succeeded)
            {
                return Ok("Updated password successfully");
            }

            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
            return BadRequest(ModelState);
        }

        [HttpGet("LoginGoogle")]
        public IActionResult LoginGoogle(string role)
        {
            var properties = new AuthenticationProperties { RedirectUri = Url.Action("GoogleResponse", new { role }) };
            return Challenge(properties, GoogleDefaults.AuthenticationScheme);
        }

        [HttpGet("GoogleResponse")]
        public async Task<IActionResult> GoogleResponse(string role)
        {
            var result = await HttpContext.AuthenticateAsync(GoogleDefaults.AuthenticationScheme);

            if (result?.Succeeded != true)
            {
                return BadRequest();
            }

            // Extract the user's email from the Google authentication result
            var email = result.Principal.FindFirstValue(ClaimTypes.Email);

            // Find the user in your database
            var user = await _userManager.FindByEmailAsync(email);

            if (user == null)
            {
                // Create a new user with the email from Google
                var newUser = new IdentityUser { UserName = email, Email = email };
                var createResult = await _userManager.CreateAsync(newUser);
                if (createResult.Succeeded)
                {
                    user = newUser;

                    // Send confirmation email
                    var loginUser = new LoginUser { UserName = user.UserName };
                    await SendConfirmationEmail(loginUser.UserName, user);

                    await _authService.AddUserInfo(result.Principal, newUser);

                    // Check if the selected role is valid
                    if (role.ToLower() != "jobseeker" && role.ToLower() != "employer")
                    {
                        return BadRequest(new { status = false, message = "Invalid role selected" });
                    }

                    // Get the selected role
                    var selectedRole = await _roleManager.FindByNameAsync(role);
                    if (selectedRole != null)
                    {
                        // Add the user to the selected role
                        var addToRoleResult = await _userManager.AddToRoleAsync(user, selectedRole.Name);
                        if (!addToRoleResult.Succeeded)
                        {
                            // _logger.LogError("Failed to add user to selected role");
                            return BadRequest(new { status = false, message = "Error adding user to selected role" });
                        }
                    }

                    //return Ok("A confirmation email has been sent. Please check your email.");
                    return Redirect("http://localhost:3000/signin?checkConfirm=true");
                }
                else
                {
                    // Handle errors during user creation
                    return BadRequest("Error creating new user");
                }
            }

            if (!user.EmailConfirmed)
            {
                var loginUser = new LoginUser { UserName = user.UserName };
                await SendConfirmationEmail(loginUser.UserName, user);
                return Redirect("http://localhost:3000/signin?checkConfirm=true");
                //return BadRequest("Email not confirmed. A confirmation email has been sent.");
            }

            // Get user roles
            var roles = await _userManager.GetRolesAsync(user);

            // Generate a JWT for the user
            var tokenString = _authService.GenerateTokenString(user.UserName, roles, user.Id);

            // Generate OTP
            if (user.TwoFactorEnabled)
            {
                var otp = _otpService.GenerateOTP();
                await _userManager.SetAuthenticationTokenAsync(user, "2FA", "OTP", otp);
                await _emailService.SendEmailAsync(user.UserName, "Your OTP", $"Your OTP is {otp}");

                //return Ok(new { Message = "OTP has been sent to your email. Please verify it." });
                return Redirect($"http://localhost:3000/signin?checkOTP={tokenString}");
            }
            
            // Return the token to the client
            //return Ok(new { Message = "Login Success!", Token = tokenString });
            return Redirect($"http://localhost:3000/callback?token={tokenString}");
        }

        [HttpPost("LogoutGoogle")]
        public async Task<IActionResult> LogoutGoogle()
        {
            // Sign out the user from the application
            await HttpContext.SignOutAsync(IdentityConstants.ApplicationScheme);

            // Redirect the user to the home page after they have logged out
            return Redirect("http://localhost:3000");
        }

        [HttpGet("signin-facebook")]
        public IActionResult SignInFacebook(string role)
        {
            var redirectUrl = Url.Action("FacebookResponse", "Auth", new { role });
            var properties = _signInManager.ConfigureExternalAuthenticationProperties("Facebook", redirectUrl);
            return new ChallengeResult("Facebook", properties);
        }

        [HttpGet("facebook-response")]
        public async Task<IActionResult> FacebookResponse(string role)
        {
            var info = await _signInManager.GetExternalLoginInfoAsync();
            if (info == null)
            {
                // Handle error here
                return BadRequest(new { Message = "Error retrieving external login info" });
            }
            var result = await _signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, isPersistent: false, bypassTwoFactor: true);
            if (result.Succeeded)
            {
                var user = await _userManager.FindByLoginAsync(info.LoginProvider, info.ProviderKey);

                // Get user roles
                var roles = await _userManager.GetRolesAsync(user);

                var tokenString = _authService.GenerateTokenString(user.UserName, roles, user.Id);
                return Ok(new { Message = "Login Success!", Token = tokenString });
            }
            else
            {
                var email = info.Principal.FindFirstValue(ClaimTypes.Email);
                var user = new IdentityUser { UserName = email, Email = email };
                var identityResult = await _userManager.CreateAsync(user);

                if (identityResult.Succeeded)
                {
                    var loginResult = await _userManager.AddLoginAsync(user, info);
                    if (loginResult.Succeeded)
                    {
                        // Add user info
                        await _authService.AddUserInfo(info.Principal, user);

                        // Check if the selected role is valid
                        if (role.ToLower() != "jobseeker" && role.ToLower() != "employer")
                        {
                            return BadRequest(new { status = false, message = "Invalid role selected" });
                        }

                        // Get the selected role
                        var selectedRole = await _roleManager.FindByNameAsync(role);
                        if (selectedRole != null)
                        {
                            // Add the user to the selected role
                            var addToRoleResult = await _userManager.AddToRoleAsync(user, selectedRole.Name);
                            if (!addToRoleResult.Succeeded)
                            {
                                // _logger.LogError("Failed to add user to selected role");
                                return BadRequest(new { status = false, message = "Error adding user to selected role" });
                            }
                        }

                        await _signInManager.SignInAsync(user, isPersistent: false);
                        var roles = await _userManager.GetRolesAsync(user);

                        var tokenString = _authService.GenerateTokenString(user.UserName, roles, user.Id);
                        return Ok(new { Message = "Login Success!", Token = tokenString });
                    }
                    else
                    {
                        return BadRequest(new { Message = "Error adding external login", loginResult.Errors });
                    }
                }
                else
                {
                    return BadRequest(new { Message = "Error creating user", identityResult.Errors });
                }
            }
            return BadRequest(new { Message = "Error logging in with Facebook" });
        }
    }
}
