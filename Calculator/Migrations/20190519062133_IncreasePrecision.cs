using Microsoft.EntityFrameworkCore.Migrations;

namespace Calculator.Migrations
{
    public partial class IncreasePrecision : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "SecondOperand",
                table: "Logs",
                type: "decimal(20, 10)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(5, 2)");

            migrationBuilder.AlterColumn<decimal>(
                name: "Result",
                table: "Logs",
                type: "decimal(20, 10)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(5, 2)",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "FirstOperand",
                table: "Logs",
                type: "decimal(20, 10)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(5, 2)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "SecondOperand",
                table: "Logs",
                type: "decimal(5, 2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(20, 10)");

            migrationBuilder.AlterColumn<decimal>(
                name: "Result",
                table: "Logs",
                type: "decimal(5, 2)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(20, 10)",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "FirstOperand",
                table: "Logs",
                type: "decimal(5, 2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(20, 10)");
        }
    }
}
