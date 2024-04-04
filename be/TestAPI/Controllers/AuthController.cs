﻿using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages;
using System.Net;
using System.Text;
using TestAPI.Models;
using TestAPI.Services;
using TestAPI.Services.Email;
using TestAPI.Services.Token;

namespace TestAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IAuthService _authService;
        private readonly IEmailService _emailService;
        private readonly IOTPService _otpService;
        private readonly ITokenService _tokenService;

        public AuthController(IAuthService authService, IEmailService emailService, UserManager<IdentityUser> userManager, IOTPService otpService, ITokenService tokenService)
        {
            _authService = authService;
            _emailService = emailService;
            _userManager = userManager;
            _otpService = otpService;
            _tokenService = tokenService;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> RegisterUser(LoginUser user)
        {
            if (await _authService.RegisterUser(user))
            {
                try
                {
                    var identityUser = await _userManager.FindByNameAsync(user.UserName);
                    await SendConfirmationEmail(user, identityUser);
                    return Ok("Create user successful!");
                }
                catch (Exception ex)
                {
                    // Log the exception
                    // _logger.LogError(ex, "Error sending confirmation email");

                    return BadRequest("Error sending confirmation email");
                }
            }
            return BadRequest("Error, can't create user!");
        }

        [HttpGet("ConfirmEmail")]
        public async Task<IActionResult> ConfirmEmail(string userName, string token)
        {
            // Decode the userName
            var base64EncodedBytes = System.Convert.FromBase64String(userName);
            var decodedUserName = System.Text.Encoding.UTF8.GetString(base64EncodedBytes);

            var result = await _authService.ConfirmEmailAsync(decodedUserName, token);
            if (result)
            {
                return Ok("Email confirmed successfully!");
            }
            return BadRequest("Error confirming email");
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginUser user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var loginResult = await _authService.Login(user);
            if (!loginResult)
            {
                return BadRequest("User not Found");
            }
            var identityUser = await _userManager.FindByNameAsync(user.UserName);

            if (identityUser == null)
            {
                return BadRequest("User not Found");
            }

            if (!identityUser.EmailConfirmed)
            {
                await SendConfirmationEmail(user, identityUser);
                return BadRequest("Email not confirmed. A confirmation email has been sent.");
            }

            // Generate OTP
            var otp = _otpService.GenerateOTP();
            await _userManager.SetAuthenticationTokenAsync(identityUser, "2FA", "OTP", otp);
            await _emailService.SendEmailAsync(user.UserName, "Your OTP", $"Your OTP is {otp}");

            return Ok(new { Message = "OTP has been sent to your email. Please verify it." });
        }

        [HttpPost("Login-2FA-Email")]
        public async Task<IActionResult> loginOTPEmail(string userName, string otp)
        {
            var user = await _userManager.FindByNameAsync(userName);
            var storedOtp = await _userManager.GetAuthenticationTokenAsync(user, "2FA", "OTP");

            if (storedOtp != otp)
            {
                // OTP does not match
                return BadRequest("Invalid OTP.");
            }

            // Generate JWT token
            var tokenString = _authService.GenerateTokenString(new LoginUser { UserName = userName });
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


        private async Task SendConfirmationEmail(LoginUser user, IdentityUser identityUser)
        {
            // Generate confirmation token
            var emailConfirmationToken = await _userManager.GenerateEmailConfirmationTokenAsync(identityUser);

            // Encode the userName
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(user.UserName);
            var encodedUserName = System.Convert.ToBase64String(plainTextBytes);

            // Generate email confirmation link
            var emailConfirmationLink = Url.Action(nameof(ConfirmEmail), "Auth", new { userName = encodedUserName, token = emailConfirmationToken }, Request.Scheme);

            string emailSubject = "Confirm your email";
            string emailContent = $"<h1>Welcome to our application!</h1><p>Thank you for registering. Please click the following <a href='{emailConfirmationLink}'>Click Here</a> to confirm your account...";

            await _emailService.SendEmailAsync(user.UserName, emailSubject, emailContent);
        }

        [HttpPost("ForgotPassword")]
        public async Task<IActionResult> ForgotPassword([FromBody] string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
            {
                // Don't reveal that the user does not exist
                return BadRequest("Invalid user");
            }

            var token = await _userManager.GeneratePasswordResetTokenAsync(user);
            var encodedUserIdAndToken = Convert.ToBase64String(Encoding.UTF8.GetBytes($"{user.Id}:{token}"));
            var callbackUrl = Url.Action(nameof(ResetPassword), "Auth", new { id = encodedUserIdAndToken }, protocol: HttpContext.Request.Scheme);

            string emailSubject = "Reset Password";
            string emailContent = $"Please reset your password by clicking <a href='{callbackUrl}'>here</a>";

            await _emailService.SendEmailAsync(email, emailSubject, emailContent);

            return Ok("Your request has been successful. Please check your email to reset your password");
        }

        [HttpPut("ResetPassword/{id}")]
        public async Task<IActionResult> ResetPassword(string id, [FromBody] string newPassword)
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

            var result = await _userManager.ResetPasswordAsync(user, token, newPassword);
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




    }
}