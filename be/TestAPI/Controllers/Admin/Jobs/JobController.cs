using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.Blazor;
using TestAPI.Contextes;
using TestAPI.Models;

namespace TestAPI.Controllers.Admin.Jobs
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class JobController : ControllerBase
    {
        private readonly AuthDemoDbContext _context;
        public JobController(AuthDemoDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var jobs = await _context.Jobs.Where(j => j.Deleted == 0).ToListAsync();
                if (jobs is null || !jobs.Any()) return NotFound(new { message = "No data" });

                return Ok(new { jobs, message = "Retrieve successfully" });
            }
            catch (Exception ex)
            {
                // Log the exception if you have a logging system
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while retrieving jobs" });
            }
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var job = await _context.Jobs.FirstOrDefaultAsync(j => j.Id == id && j.Deleted == 0);
                if (job == null) return NotFound(new { message = "Id not found" });
                return Ok(job);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while retrieving the job" });
            }
        }


        [HttpPost]
        public async Task<IActionResult> Post(Job job)
        {
            try
            {
                var newJob = new Job
                {
                    Title = job.Title,
                    Description = job.Description,
                    SalaryRange = job.SalaryRange,
                    Experience_required = job.Experience_required,
                    Education_required = job.Education_required,
                    Skill_required = job.Skill_required,
                    Application_deadline = job.Application_deadline,
                    status = "open",
                    JobCategoryId = job.JobCategoryId,
                    Created_At = DateTime.Now,
                    Updated_At = DateTime.Now,
                    Deleted = 0
                };
                _context.Jobs.Add(newJob);
                await _context.SaveChangesAsync();
                return Ok(new { job = newJob, message = "Create job successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while create the job" });
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Job job)
        {
            try
            {
                var jobUpdate = await _context.Jobs.FirstOrDefaultAsync(j => j.Id == id && j.Deleted == 0);
                if (jobUpdate == null) return NotFound(new { message = "Id not found" });

                jobUpdate.Title = job.Title;
                jobUpdate.Description = job.Description;
                jobUpdate.SalaryRange = job.SalaryRange;
                jobUpdate.Experience_required = job.Experience_required;
                jobUpdate.Education_required = job.Education_required;
                jobUpdate.Skill_required = job.Skill_required;
                jobUpdate.Application_deadline = job.Application_deadline;
                jobUpdate.status = job.status;
                jobUpdate.JobCategoryId = job.JobCategoryId;
                jobUpdate.Updated_At = DateTime.Now;
                await _context.SaveChangesAsync();

                return Ok(new { message = "Update category successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while update the job" });
            }
        }

        // DELETE: api/Jobs/id
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var jobUpdate = await _context.Jobs.FirstOrDefaultAsync(j => j.Id == id && j.Deleted == 0);
                if (jobUpdate == null) return NotFound(new { message = "Id not found" });

                var relatedApplications = await _context.Applications.AnyAsync(a => a.JobId == id);

                if (relatedApplications)
                {
                    return BadRequest(new { message = "Please delete related applications before deleting this job." });
                }

                jobUpdate.Deleted = 1;
                _context.SaveChanges();

                return Ok(new { message = "Delete category successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while deleted the job" });
            }
        }
    }
}
