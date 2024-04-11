using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestAPI.Contextes;
using TestAPI.Models;

namespace TestAPI.Controllers.Admin.Applications
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationController : ControllerBase
    {
        private readonly AuthDemoDbContext _context;
        public ApplicationController(AuthDemoDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var applications = await _context.Applications.ToListAsync();
                if (applications is null || !applications.Any()) return NotFound(new { message = "No data" });

                return Ok(new { applications, message = "Retrieve successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while retrieving applications" });
            }
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var application = _context.Applications.Find(id);
                if (application == null) return NotFound(new { message = "Id not found" });
                return Ok(application);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while retrieving the application" });
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Application application)
        {
            try
            {
                var newApplication = new Application
                {
                    resume = application.resume,
                    coverLetter = application.coverLetter,
                    selfIntroduction = application.selfIntroduction,
                    status = "pending",
                    JobId = application.JobId,
                    UserId = application.UserId,
                    Created_At = DateTime.Now,
                    Updated_At = DateTime.Now,
                    Deleted = 0
                };
                await _context.Applications.AddAsync(newApplication);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Application created successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while creating the application" });
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Application application)
        {
            try
            {
                var applicationToUpdate = _context.Applications.Find(id);
                if (applicationToUpdate == null) return NotFound(new { message = "Id not found" });

                applicationToUpdate.resume = application.resume;
                applicationToUpdate.coverLetter = application.coverLetter;
                applicationToUpdate.selfIntroduction = application.selfIntroduction;
                applicationToUpdate.status = application.status;
                applicationToUpdate.JobId = application.JobId;
                applicationToUpdate.UserId = application.UserId;
                applicationToUpdate.Updated_At = DateTime.Now;

                await _context.SaveChangesAsync();
                return Ok(new { message = "Application updated successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while updating the application" });
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var applicationToDelete = _context.Applications.Find(id);
                if (applicationToDelete == null) return NotFound(new { message = "Id not found" });

                _context.Applications.Remove(applicationToDelete);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Application deleted successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while deleting the application" });
            }
        }
    }
}
