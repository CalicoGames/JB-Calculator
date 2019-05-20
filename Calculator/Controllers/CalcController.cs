using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Calculator.Models;

namespace Calculator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalcController : ControllerBase
    {
        private readonly CalculatorContext _context;

        public CalcController(CalculatorContext context)
        {
            _context = context;
        }

        // GET: api/Calc
        /// <summary>
        /// Get most recent calculation.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<CalculationLog>> GetLog()
        {
            var latest = await 
                (from c in _context.Logs
                 orderby c.TimeStamp descending
                 select c)
                 .FirstOrDefaultAsync();
            return latest;
        }

        // POST: api/Calc
        /// <summary>
        /// Post most recent calculation, return result of calculation.
        /// </summary>
        /// <param name="calculationLog"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<ActionResult<CalculationLog>> PostCalculationLog(CalculationLog calculationLog)
        {
            calculationLog.PerformCalc();
            _context.Logs.Add(calculationLog);
            await _context.SaveChangesAsync();

            return calculationLog;
        }

    }
}
