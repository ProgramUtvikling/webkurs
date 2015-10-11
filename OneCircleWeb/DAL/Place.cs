using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.Spatial;

namespace OneCircleWeb.DAL
{
    public class Place
    {
        public int Id { get; set; }

        [StringLength(100), Required]
        public string Title { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

    }
}