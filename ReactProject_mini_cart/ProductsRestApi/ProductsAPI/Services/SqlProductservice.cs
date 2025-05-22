using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductsAPI.Model;
using ProductsAPI.Repository;

namespace ProductsAPI.Services
{
    public class SqlProductservice : IProductrepository
    {
        private readonly AppdbContext context;

        public SqlProductservice(AppdbContext conxt)
        {
            context = conxt;
        }

        public async Task<ActionResult<IEnumerable<Category>>>? GetCategories()
        {
            var cats = await context.Categories.ToListAsync();
            return cats;
        }

        public async Task<ActionResult<IEnumerable<Product>>>? GetProducts()
        {
            var prods = await context.Products.Include("Categories").ToListAsync();
            return prods;
        }
    }
}
