namespace TestAPI.Services.Token
{
    public interface ITokenService
    {
        Task<bool> InvalidateToken(string token);
    }
}
