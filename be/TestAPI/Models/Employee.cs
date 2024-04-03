using System.ComponentModel.DataAnnotations;

namespace TestAPI.Models
{
    public class Employee
    {
        public int Id { get; set; }
        [Required]
        public string? Name { get; set; }
    }
}
