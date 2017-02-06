using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
namespace formgenerator.data_layer
{
    public class Template
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<TemplateDetail> TemplateDetails { get; set; }

    }
}