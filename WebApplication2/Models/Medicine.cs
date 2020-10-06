using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Medicine
    {
        public long MedicineId { get; set; }
        public string MedicineName { get; set; }
        public string Brand { get; set; }
        public long Price { get; set; }
        public long Quantity { get; set; }
        public DateTime? ExpiryDate {get; set;}
        public string Notes { get; set; }


    }
}