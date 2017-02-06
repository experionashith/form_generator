namespace formgenerator.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.TemplateDetails",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Label = c.String(nullable: false, maxLength: 50),
                        Type = c.String(nullable: false, maxLength: 50),
                        AssociatedTemplateId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Templates", t => t.AssociatedTemplateId, cascadeDelete: true)
                .Index(t => t.AssociatedTemplateId);
            
            CreateTable(
                "dbo.Templates",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        username = c.String(nullable: false, maxLength: 50),
                        password = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.TemplateDetails", "AssociatedTemplateId", "dbo.Templates");
            DropIndex("dbo.TemplateDetails", new[] { "AssociatedTemplateId" });
            DropTable("dbo.Users");
            DropTable("dbo.Templates");
            DropTable("dbo.TemplateDetails");
        }
    }
}
