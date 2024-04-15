using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using TestAPI.Contextes;
using TestAPI.Models;
using TestAPI.Services.HubService;

namespace TestAPI.Controllers.Admin.Categories
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly AuthDemoDbContext _context;

        private readonly IHubContext<ServiceHub> _hubContext;
        public CategoriesController(AuthDemoDbContext context, IHubContext<ServiceHub> hubContext)
        {
            _context = context;
            _hubContext = hubContext;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var jobCategories = await _context.JobCategories.ToListAsync();
                if (jobCategories is null) return NotFound(new { message = "No data" });

                return Ok(new { jobCategories, message = "Retrieve successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while retrieving the category" });
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(JobCategories category)
        {
            try
            {
                var newCategory = new JobCategories
                {
                    Name = category.Name
                };
                if (newCategory is null) return BadRequest(new { employee = newCategory, message = "Retrieve successfully" });
                _context.JobCategories.Add(newCategory);
                await _context.SaveChangesAsync();

                await _hubContext.Clients.All.SendAsync("createdCategory", newCategory);
                return Ok(new { category = newCategory, message = "Create category successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while create the category" });
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, JobCategories category)
        {
            try
            {
                var categoryUpdate = _context.JobCategories.Find(id);
                if (categoryUpdate == null)
                {
                    return NotFound(new { message = "Id not found" });
                }
                categoryUpdate.Name = category.Name;
                await _context.SaveChangesAsync();

                await _hubContext.Clients.All.SendAsync("updatedCategory", categoryUpdate);
                return Ok(new { message = "Update category successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while update the job" });
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            try
            {
                var category = _context.JobCategories.Find(id);
                if (category == null) return NotFound(new { message = "Id not found" });

                var relatedJobs = await _context.Jobs.Where(j => j.JobCategoryId == id).ToListAsync();
                // ktra xem tk con đã xoá mềm hay chưa
                if (relatedJobs.Any(j => j.Deleted == 0))
                {
                    return BadRequest(new { message = "Can't delete category because it has related jobs that are not deleted" });
                }
                // nếu tk con đã xoá mềm rồi thì thực hiện xoá cứng tk con và tk cha
                foreach (var job in relatedJobs)
                {
                    _context.Jobs.Remove(job);
                }
                _context.JobCategories.Remove(category);
                _context.SaveChanges();

                await _hubContext.Clients.All.SendAsync("deletedCategory", category);
                return Ok(new { message = "Delete category successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while deleted the category" });
            }
        }
    }
}
