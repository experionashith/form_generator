using formgenerator.data_layer;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace formgenerator.DataLayer
{
    public class FormContext : DbContext
    {
        public FormContext() : base("name=FormConnectionString")
        {

        }
         // public Dbset
        public DbSet<TemplateDetail> TemplateDetails { get; set; } // Represent Formlistentity Table in DB
        public DbSet<Template> Templates { get; set; } // Represent Formlistindb Table in DB
        public DbSet<User> Users { get; set; } // Represent UserindbTable in DBs

        // OnModelCreating(DbModelBuilder modelBuilder)
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Template>().HasKey(c => c.Id);

            // FLUENT API Validations    
            modelBuilder.Entity<Template>()
                .Property(c => c.Id)
                .IsRequired();

            modelBuilder.Entity<Template>()
             .Property(c => c.Name)
             .IsRequired();

            // Relationships in Fluent
            modelBuilder.Entity<TemplateDetail>()
                 .HasRequired(c => c.AssociatedTemplate)
                 .WithMany(s => s.TemplateDetails)
                 .HasForeignKey(s => s.AssociatedTemplateId);


           

            modelBuilder.Entity<TemplateDetail>()
                .Property(s => s.Label)
                .HasMaxLength(50)
                .IsRequired();

            modelBuilder.Entity<TemplateDetail>()
                .Property(s => s.Type)
                 .HasMaxLength(50)
                .IsRequired();

            modelBuilder.Entity<TemplateDetail>()
                .Property(s => s.Type)
                 .HasMaxLength(50)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(s => s.username)
                .HasMaxLength(50)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(s => s.password)
                .HasMaxLength(50)
                .IsRequired();

        }
    }
}




