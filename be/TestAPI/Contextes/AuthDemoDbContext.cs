using Microsoft.AspNetCore.Identity;
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

        public DbSet<Job> Jobs { get; set; }


        //add role
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<IdentityRole>().HasData(new IdentityRole { Name = "Admin", NormalizedName = "ADMIN" });
            builder.Entity<IdentityRole>().HasData(new IdentityRole { Name = "Employer", NormalizedName = "EMPLOYER" });
            builder.Entity<IdentityRole>().HasData(new IdentityRole { Name = "JobSeeker", NormalizedName = "JOBSEEKER" });
        }

    }
}
