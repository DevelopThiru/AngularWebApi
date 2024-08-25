using AngularWebApi.Server.Model;
using Microsoft.EntityFrameworkCore;

namespace AngularWebApi.Server.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }

      
    }
}
