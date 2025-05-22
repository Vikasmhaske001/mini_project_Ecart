using Microsoft.EntityFrameworkCore;
using ProductsAPI.Model;

namespace ProductsAPI.Repository
{
    public class AppdbContext:DbContext
    {

        public AppdbContext(DbContextOptions<AppdbContext>options):base(options)
        {
            
        }

       public DbSet<Product> Products { get; set; }
       public DbSet<Category> Categories { get; set; }
    }
}
