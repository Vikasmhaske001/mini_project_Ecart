using System.Text.Json.Serialization;

namespace ProductsAPI.Model
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string ImgUrl { get; set; }

        public float Price { get; set; }    
        public Category? Categories {get; set;}
    }
}
