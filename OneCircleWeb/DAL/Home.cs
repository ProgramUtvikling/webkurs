using System.ComponentModel.DataAnnotations;

namespace OneCircleWeb.DAL
{
    public class Home : Place
    {
        [StringLength(100)]
        public string WhoLivesHere { get; set; }
    }
}