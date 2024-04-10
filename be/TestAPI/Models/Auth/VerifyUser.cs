using System.Diagnostics.CodeAnalysis;

namespace TestAPI.Models.Auth
{
    public class VerifyUser
    {
        public string UserName { get; set; }
        public string? otp { get; set; }
    }
}
