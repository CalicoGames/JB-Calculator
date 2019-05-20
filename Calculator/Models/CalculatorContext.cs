using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Calculator.Models
{
    public class CalculatorContext : DbContext
    {
        public CalculatorContext(DbContextOptions<CalculatorContext> options)
            : base(options)
        {
            
        }
        public CalculatorContext()
        {

        }

        /// <summary>
        /// We need this for scaffolding and data migrations in Visual Studio.
        /// </summary>
        /// <param name="optionsBuilder"></param>
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();
            optionsBuilder.UseSqlServer(configuration.GetConnectionString("CalculatorConnection"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Give TimeStamp an index since we will be searching based on it.
            modelBuilder.Entity<CalculationLog>()
                .HasIndex(b => b.TimeStamp);
        }

        public DbSet<CalculationLog> Logs { get; set; }
    }
}
