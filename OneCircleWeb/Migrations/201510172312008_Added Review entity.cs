namespace OneCircleWeb.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedReviewentity : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Reviews",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Author = c.String(nullable: false, maxLength: 100),
                        Text = c.String(nullable: false),
                        PlaceId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Places", t => t.PlaceId, cascadeDelete: true)
                .Index(t => t.PlaceId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Reviews", "PlaceId", "dbo.Places");
            DropIndex("dbo.Reviews", new[] { "PlaceId" });
            DropTable("dbo.Reviews");
        }
    }
}
