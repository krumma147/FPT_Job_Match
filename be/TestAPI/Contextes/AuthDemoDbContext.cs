using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;
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

        public DbSet<JobCategories> JobCategories { get; set; }
        public DbSet<UserInfo> UserInfos { get; set; }
        public DbSet<Job> Jobs { get; set; }

        public DbSet<Application> Applications { get; set; }

        //add role
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<IdentityRole>().HasData(new IdentityRole { Id = "AD", Name = "Admin", NormalizedName = "ADMIN" });
            builder.Entity<IdentityRole>().HasData(new IdentityRole { Id = "EMP", Name = "Employer", NormalizedName = "EMPLOYER" });
            builder.Entity<IdentityRole>().HasData(new IdentityRole { Id = "JS", Name = "JobSeeker", NormalizedName = "JOBSEEKER" });

            builder.Entity<UserInfo>()
           .HasOne(m => m.User)
           .WithOne()
           .HasForeignKey<UserInfo>(m => m.UserId);

            builder.Entity<Job>()
            .HasOne(j => j.Employer)
            .WithMany()
            .HasForeignKey(j => j.EmployerId);

            builder.Entity<Application>()
            .HasOne(a => a.Job)
            .WithMany(j => j.Applications)
            .HasForeignKey(a => a.JobId)
            .OnDelete(DeleteBehavior.Restrict);
        }

    }
}
