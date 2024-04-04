using TestAPI.Contextes;

namespace TestAPI.Services.Token
{
    public class TokenService : ITokenService
    {
        private readonly AuthDemoDbContext _context;

        public TokenService(AuthDemoDbContext context)
        {
            _context = context;
        }

        public async Task<bool> InvalidateToken(string token)
        {
            // No action is taken when the user logs out
            return await Task.FromResult(true);
        }
    }
}
