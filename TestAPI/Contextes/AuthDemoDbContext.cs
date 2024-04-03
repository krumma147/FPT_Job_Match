using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TestAPI.Models;

namespace TestAPI.Contextes
{
    public class AuthDemoDbContext : IdentityDbContext
    {

        public AuthDemoDbContext(DbContextOptions options) : base(options)
        {
        }

        protected AuthDemoDbContext()
        {
        }

        public DbSet<Employee> Employees { get; set; }

        public DbSet<JobCategories> JobCategories { get; set; }
    }
}
