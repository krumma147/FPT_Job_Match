using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TestAPI.Models;

namespace TestAPI.Services
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IConfiguration _config;

        public AuthService(UserManager<IdentityUser> userManager, IConfiguration config)
        {
            _userManager = userManager;
            _config = config;
        }

        public async Task<bool> RegisterUser(LoginUser user)
        {
            var identityUser = new IdentityUser
            {
                UserName = user.UserName,
                Email = user.UserName,
            };
            var result = await _userManager.CreateAsync(identityUser, user.Password);
            return result.Succeeded;
        }

        public async Task<bool> Login(LoginUser user)
        {
            var iUser = await _userManager.FindByEmailAsync(user.UserName);
            if (iUser is null)
            {
                return false;
            }
            return await _userManager.CheckPasswordAsync(iUser, user.Password);
        }

        public string GenerateTokenString(LoginUser user)
        {
            var claims = new List<Claim> {
                new Claim(ClaimTypes.Email, user.UserName),
                new Claim(ClaimTypes.Role, "Admin"),
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("Jwt:Key").Value));
            var signingCred = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var securityToken = new JwtSecurityToken(
                claims: claims,
                issuer: _config.GetSection("Jwt:Issuer").Value,
                audience: _config.GetSection("Jwt:Audience").Value,
                expires: DateTime.Now.AddMinutes(60),
                signingCredentials: signingCred
            );
            string tokenString = new JwtSecurityTokenHandler().WriteToken(securityToken);
            return tokenString; 
        }

        public async Task<string> GenerateEmailConfirmationTokenAsync(LoginUser user)
        {
            var identityUser = await _userManager.FindByNameAsync(user.UserName);
            return await _userManager.GenerateEmailConfirmationTokenAsync(identityUser);
        }

        public async Task<bool> ConfirmEmailAsync(string userName, string token)
        {
            var user = await _userManager.FindByNameAsync(userName);
            if (user == null)
                return false;

            var result = await _userManager.ConfirmEmailAsync(user, token);
            return result.Succeeded;
        }
    }
}
