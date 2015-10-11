using System.ComponentModel.DataAnnotations;
using System.Data.Entity.Spatial;

namespace OneCircleWeb.DAL
{
    public abstract class Place
    {
        public int Id { get; set; }

        [StringLength(100), Required]
        public string Title { get; set; }

        public DbGeography Coordinates { get; set; }
    }
}