using System.Diagnostics.CodeAnalysis;

namespace TestAPI.Models
{
    public class VerifyUser
    {
        public string UserName { get; set; }
        public string? otp { get; set; }
    }
}
