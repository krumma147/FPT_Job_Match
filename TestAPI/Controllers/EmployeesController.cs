using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestAPI.Contextes;
using TestAPI.Models;

namespace TestAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class EmployeesController : ControllerBase
    {
        private readonly AuthDemoDbContext _db;
        public EmployeesController(AuthDemoDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var employees = await _db.Employees.ToListAsync();
            if (employees is null) return NotFound();
            
            return Ok(new { employees = employees, message = "Retrieve successfully" });
        }

        [HttpPost]
        public async Task<IActionResult> Post(Employee employee) {
            var newEmployee = new Employee
            {
                Name = employee.Name
            };
            if (newEmployee is null) return BadRequest(new { employee = newEmployee, message = "Retrieve successfully" });
            _db.Employees.Add(newEmployee);
            await _db.SaveChangesAsync();
            return Ok(new { employee = newEmployee, message = "Create employee successfully" });
        }
    }
}
