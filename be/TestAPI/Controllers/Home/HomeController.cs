using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TestAPI.Models.Auth;

namespace TestAPI.Controllers.Home
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;

        public HomeController(UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
        }
        [HttpPut("Check2FA/{userId}")]
        public async Task<IActionResult> ToggleTwoFactorAuthentication(string userId, Check2FA request)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                return NotFound($"Unable to load user with ID '{userId}'.");
            }

            var setTwoFactorResult = await _userManager.SetTwoFactorEnabledAsync(user, request.Enable);
            if (!setTwoFactorResult.Succeeded)
            {
                return BadRequest($"Unexpected error occurred setting two-factor authentication for user with ID '{userId}'.");
            }
            if (request.Enable == false)
            {
                return Ok("Two-factor authentication has been disabled for your account.");
            }

            return Ok("Two-factor authentication has been enabled for your account.");
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetUserTwoFactorStatus(string userId, bool status)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                return NotFound($"Unable to load user with ID '{userId}'.");
            }
            return Ok(new {message="Success", status=user.TwoFactorEnabled});
        }
    }
}
