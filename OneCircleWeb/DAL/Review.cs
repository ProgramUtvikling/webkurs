using System.ComponentModel.DataAnnotations;

namespace OneCircleWeb.DAL
{
    public class Review
    {
        public int Id { get; set; }

        [StringLength(100), Required]
        public string Author { get; set; }

        [Required]
        public string Text { get; set; }

        public int PlaceId { get; set; }
        public Place Place { get; set; }
    }
}