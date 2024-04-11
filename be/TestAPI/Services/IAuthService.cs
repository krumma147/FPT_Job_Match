using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using TestAPI.Models.Auth;

namespace TestAPI.Services
{
    public interface IAuthService
    {
        string GenerateTokenString(string userName, IList<string> roles);
        Task<bool> Login(LoginRequest user);
        Task<bool> RegisterUser(LoginUser user);
        Task<string> GenerateEmailConfirmationTokenAsync(LoginUser user);
        Task<bool> ConfirmEmailAsync(string userName, string token);
        Task<bool> AddUserInfo(ClaimsPrincipal principal, IdentityUser newUser);
    }
}