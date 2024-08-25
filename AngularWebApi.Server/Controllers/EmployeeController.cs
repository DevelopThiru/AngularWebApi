using AngularWebApi.Server.Data;
using AngularWebApi.Server.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularWebApi.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {

        public ApplicationDbContext applicationDb;

        public EmployeeController(ApplicationDbContext applicationDb)
        {
            this.applicationDb = applicationDb;
        }


        [HttpGet]
        public IActionResult GetDetails()
        {
            var data = applicationDb.Employees.ToList();
            return Ok(data);
        }

        [HttpGet]
        [Route("{Id:int}")]
     
        public IActionResult GetDetails(int Id)
        {
            var Details= applicationDb.Employees.FirstOrDefault(x=>x.EmployeeID==Id);   
            return Ok(Details);
        }


        [HttpPost]
        public IActionResult Create(Employee employee) 
            {
              applicationDb.Employees.Add(employee);
            applicationDb.SaveChanges();
            return Ok();    
            }

        [HttpPut("{id:int}")]
        public IActionResult Update(int id,[FromBody] Employee employee)
        {
            if(id != employee.EmployeeID)
            {
                return BadRequest();
            }
            applicationDb.Entry(employee).State =EntityState.Modified;
            applicationDb.SaveChanges();
            return Ok();
        }

        [HttpDelete]
        [Route("{Id:int}")]
        public IActionResult Delete(int Id)
        {
            var detle = applicationDb.Employees.Where(x=>x.EmployeeID == Id).FirstOrDefault();
            applicationDb.Remove(detle);
            applicationDb.SaveChanges();
            return Ok();
        }
    }
}
