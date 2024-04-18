using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace TestAPI.Models
{
    public class UserInfo
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string? Skill {  get; set; }
        public string? Expericene { get; set; }
        public string? Company { get; set; }
        public string? Image { get; set; }
        public string UserId { get; set; }
        public virtual IdentityUser? User { get; set; }

    }
}
