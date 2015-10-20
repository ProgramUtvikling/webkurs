using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace OneCircleWeb.DAL
{
    public class OneCircleDbContext : DbContext
    {
        public DbSet<Place> Places { get; set; }
        public DbSet<Review> Reviews { get; set; }
    }
}