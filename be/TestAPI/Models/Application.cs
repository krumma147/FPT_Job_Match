using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace TestAPI.Models
{
    public class Application
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string resume { get; set; }
        [Required]
        public string coverLetter { get; set; }
        [Required]
        public string selfIntroduction { get; set; }

        [DefaultValue("pending")]
        public string? status { get; set; }

        // Foreign Key
        [Required]
        public int JobId { get; set; }
        public virtual Job? Job { get; set; }

        [Required]
        public string UserId { get; set; }
        public virtual IdentityUser? User { get; set; }


        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column(TypeName = "datetime2")]
        public DateTime? Created_At { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column(TypeName = "datetime2")]
        public DateTime? Updated_At { get; set; }

        [DefaultValue(0)]
        public int? Deleted { get; set; }
    }
}
