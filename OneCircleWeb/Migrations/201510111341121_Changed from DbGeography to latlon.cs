namespace OneCircleWeb.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangedfromDbGeographytolatlon : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Places", "Latitude", c => c.Double(nullable: false));
            AddColumn("dbo.Places", "Longitude", c => c.Double(nullable: false));
            DropColumn("dbo.Places", "Coordinates");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Places", "Coordinates", c => c.Geography());
            DropColumn("dbo.Places", "Longitude");
            DropColumn("dbo.Places", "Latitude");
        }
    }
}
