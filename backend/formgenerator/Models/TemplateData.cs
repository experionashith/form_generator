using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace formgenerator.Models
{
    public class TemplateData
    {
        public string formname { get; set; }
        public List<FormDetails> formdetails { get; set; }   
    }
}