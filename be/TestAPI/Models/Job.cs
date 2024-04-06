using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using NuGet.Packaging.Signing;

namespace TestAPI.Models
{
    public class Job
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string SalaryRange { get; set; }
        [Required]
        public double Experience_required { get; set; }
        [Required]
        public double Education_required { get; set; }

        [Required]
        public string Skill_required { get; set; }

        [Required]
        public DateTime Application_deadline { get; set; }

        [DefaultValue("open")]
        public string? status { get; set; }
        // Foreign Key
        [Required]
        public int JobCategoryId { get; set; }
        public virtual JobCategories? JobCategory { get; set; }


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
