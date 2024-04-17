using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace TestAPI.Models.Auth
{
    public class LoginUser
    {
        [Required]
        public string FullName { get; set; }
        [Required]
        public string UserName { get; set; }
        //[Required]
        public string? Password { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        public string Email { get; set; }

        public string? Company { get; set; }

        [Required]
        public string Role { get; set; }

    }
}
