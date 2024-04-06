using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using TestAPI.Models;

namespace TestAPI.Services
{
    public interface IAuthService
    {
        string GenerateTokenString(LoginUser user);
        Task<bool> Login(LoginUser user);
        Task<bool> RegisterUser(LoginUser user);
        Task<string> GenerateEmailConfirmationTokenAsync(LoginUser user);
        Task<bool> ConfirmEmailAsync(string userName, string token);
        Task<bool> AddUserInfo(ClaimsPrincipal principal, IdentityUser newUser);
    }
}