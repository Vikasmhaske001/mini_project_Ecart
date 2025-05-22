using Microsoft.AspNetCore.Mvc;
using ProductsAPI.Model;

namespace ProductsAPI.Services
{
    public interface IProductrepository
    {
        Task <ActionResult<IEnumerable<Product>>>? GetProducts();
        Task<ActionResult<IEnumerable<Category>>>? GetCategories();

    }
}
