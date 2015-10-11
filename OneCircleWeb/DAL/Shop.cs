using System.ComponentModel.DataAnnotations;

namespace OneCircleWeb.DAL
{
    public class Shop : Place
    {
        public string WhatDoTheySell { get; set; }

        [StringLength(100)]
        public string OpenHours { get; set; }
    }
}