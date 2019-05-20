using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Calculator.Models
{
    public class CalculationLog
    {
        [Key]
        public int CalculationLogId { get; set; }
        public DateTime TimeStamp { get; set; }
        [Column(TypeName = "decimal(20, 10)")]
        public decimal FirstOperand { get; set; }
        [MaxLength(100)]
        public string Operator { get; set; }
        [Column(TypeName = "decimal(20, 10)")]
        public decimal SecondOperand { get; set; }
        [Column(TypeName = "decimal(20, 10)")]
        public decimal? Result { get; set; }

        /// <summary>
        /// Perform Calculation and generate Result.
        /// </summary>
        public void PerformCalc()
        {
            // save operation with timestamp
            TimeStamp = DateTime.UtcNow;
            switch(Operator)
            {
                case "+":
                    Result = FirstOperand + SecondOperand;
                    break;
                case "-":
                case "−":
                    Operator = "−";
                    Result = FirstOperand - SecondOperand;
                    break;
                case "/":
                case "÷":
                    Operator = "÷";
                    if (SecondOperand != 0.0m)
                    {
                        Result = FirstOperand / SecondOperand;
                    }
                    break;
                case "*":
                case "x":
                case "X":
                case "×":
                    Operator = "×";
                    Result = FirstOperand * SecondOperand;
                    break;
            }
        }

    }
}
