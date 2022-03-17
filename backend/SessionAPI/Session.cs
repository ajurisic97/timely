using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace SessionAPI
{
    public class Session
    {
        public int Id { get; set; }
        
        [StringLength(200)]
        public string Name { get; set; } = string.Empty;

        public DateTime DateStart { get; set; } 

        public DateTime DateEnd { get; set; }

        public string Duration { get; set; } = string.Empty;
    }
}
