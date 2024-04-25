using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using System.Drawing;
using TestAPI.Contextes;
using TestAPI.Models;
using TestAPI.Models.Auth;
using TestAPI.Services.HubService;

namespace TestAPI.Controllers.Admin.Users
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AuthDemoDbContext _context;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IHubContext<ServiceHub> _hubContext;
        public UserController(AuthDemoDbContext context, UserManager<IdentityUser> userManager, RoleManager<IdentityRole> roleManager, IHubContext<ServiceHub> hubContext)
        {
            _context = context;
            _userManager = userManager;
            _roleManager = roleManager;
            _hubContext = hubContext;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var users = await _userManager.Users.ToListAsync();
            var userRoles = new List<object>();

            foreach (var user in users)
            {
                var roles = await _userManager.GetRolesAsync(user);
                var userInfo = await _context.UserInfos.FirstOrDefaultAsync(u => u.UserId == user.Id);
                userRoles.Add(new
                {
                    user = user,
                    roles = roles,
                    fullName = userInfo?.FullName,
                    image = userInfo?.Image,
                });
            }

            return Ok(userRoles);
        }

        // POST: api/User
        [HttpPost]
        public async Task<ActionResult<IdentityUser>> PostUser(LoginUser model)
        {
            try
            {
                var existingEmailUser = await _userManager.FindByEmailAsync(model.Email);
                if (existingEmailUser != null)
                {
                    return BadRequest(new { status = false, error = "Email already exists." });
                }

                var existingPhoneUser = await _userManager.Users.SingleOrDefaultAsync(u => u.PhoneNumber == model.PhoneNumber);
                if (existingPhoneUser != null)
                {
                    return BadRequest(new { status = false, message = "Phone number already in use!" });
                }
                var user = new IdentityUser
                {
                    UserName = model.UserName,
                    Email = model.Email,
                    PhoneNumber = model.PhoneNumber
                };
                var result = await _userManager.CreateAsync(user, model.Password);
                if (!result.Succeeded)
                {
                    return BadRequest(result.Errors);
                }

                var roleExists = await _roleManager.RoleExistsAsync(model.Role);
                if (!roleExists)
                {
                    return BadRequest(new { error = $"Role '{model.Role}' does not exist." });
                }

                result = await _userManager.AddToRoleAsync(user, model.Role);
                if (!result.Succeeded)
                {
                    return BadRequest(result.Errors);
                }

                CreatedAtAction("GetUser", new { id = user.Id }, user);
                var userInfo = new UserInfo
                {
                    UserId = user.Id,
                    FullName = model.FullName,
                    Skill = "",
                    Expericene = "",
                };
                _context.UserInfos.Add(userInfo);
                await _context.SaveChangesAsync();
                // notification clients
                await _hubContext.Clients.All.SendAsync("createdUser", user);

                return Ok("Create user Successfully");
            }
            catch(Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while creating the user" });
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<object>> GetUser(string id)
        {
            try
            {
                var user = await _userManager.FindByIdAsync(id);

                if (user == null) return NotFound(new { message = "Id not found!" });

                var userInfo = await _context.UserInfos.FirstOrDefaultAsync(u => u.UserId == user.Id);

                var roles = await _userManager.GetRolesAsync(user);
                return new
                {
                    user = user,
                    roles = roles,
                    fullName = userInfo?.FullName,
                    image = userInfo?.Image,
                };
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing request.");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(string id, LoginUser model)
        {
            try
            {
                var user = await _userManager.FindByIdAsync(id);
                if (user == null) return NotFound(new { message = "Id not Found!" });

                var existingUser = await _userManager.FindByEmailAsync(model.Email);
                if (existingUser != null && existingUser.Id != id)
                {
                    return BadRequest(new { status = false, error = "Email already exists." });
                }
                var existingPhoneUser = await _userManager.Users.SingleOrDefaultAsync(u => u.PhoneNumber == model.PhoneNumber);
                if (existingPhoneUser != null && existingPhoneUser.Id !=id)
                {
                    return BadRequest(new { status = false, message = "Phone number already in use!" });
                }
                user.UserName = model.UserName;
                user.Email = model.Email;
                user.PhoneNumber = model.PhoneNumber;
                if (model.Password != null)
                {
                    var passwordHasher = new PasswordHasher<IdentityUser>();
                    user.PasswordHash = passwordHasher.HashPassword(user, model.Password);
                }

                var result = await _userManager.UpdateAsync(user);
                if (!result.Succeeded)
                {
                    return BadRequest(result.Errors);
                }

                var userRole = await _userManager.GetRolesAsync(user);
                if (userRole.Count > 0)
                {
                    await _userManager.RemoveFromRolesAsync(user, userRole);
                }

                var roleExists = await _roleManager.RoleExistsAsync(model.Role);
                if (!roleExists)
                {
                    return BadRequest(new { error = $"Role '{model.Role}' does not exist." });
                }

                result = await _userManager.AddToRoleAsync(user, model.Role);
                if (!result.Succeeded)
                {
                    return BadRequest(result.Errors);
                }

                var userInfo = await _context.UserInfos.FirstOrDefaultAsync(u => u.UserId == id);
                if (userInfo == null)
                {
                    return NotFound();
                }

                userInfo.FullName = model.FullName;
                userInfo.Image = model.Image;
                await _context.SaveChangesAsync();
                // notification clients
                await _hubContext.Clients.All.SendAsync("updatedUser", user);

                return Ok("Update user Successfully");
            }
            catch (Exception ex)
            {
                // Return a generic error message
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing updated.");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(string id)
        {
            try
            {
                var user = await _userManager.FindByIdAsync(id);
                if (user == null) return NotFound(new { message = "Id not Found!" });

                // Find and delete related applications
                var applications = _context.Applications.Where(a => a.UserId == id);
                if (applications != null)
                {
                    _context.Applications.RemoveRange(applications);
                    await _context.SaveChangesAsync();
                }
                // Find and delete related Jobs
                var jobs = _context.Jobs.Where(a => a.EmployerId == id);
                if (jobs != null)
                {
                    _context.Jobs.RemoveRange(jobs);
                    await _context.SaveChangesAsync();
                }

                var result = await _userManager.DeleteAsync(user);
                if (!result.Succeeded)
                {
                    return BadRequest(result.Errors);
                }
            
                if (!result.Succeeded)
                {
                    return BadRequest(result.Errors);
                }
                // notification clients
                await _hubContext.Clients.All.SendAsync("deletedUser", user);

                return Ok("Delete user Successfully");
            }
            catch(Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing deleted.");
            }
        }
    }
}
