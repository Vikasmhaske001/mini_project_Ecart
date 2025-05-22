using System.Text.Json.Serialization;

namespace ProductsAPI.Model
{
    public class Category
    {
        public int Id { get; set; }
        public string CatName { get; set; }
        [JsonIgnore]
        public IEnumerable<Product>? Products { get;set; }
    }
}
