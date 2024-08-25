using System.ComponentModel.DataAnnotations;

namespace AngularWebApi.Server.Model
{
    public class Employee
    {
        [Key]
        public int EmployeeID { get; set; } 

        public string? EmployeeName { get; set; }

        public string? EmployeeNumber { get; set; }

        public string? EmployeeEmail {  get; set; } 

        public string? EmployeeAge {  get; set; }   
    }
}
