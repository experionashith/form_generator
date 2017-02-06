using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace formgenerator.data_layer
{
    public class TemplateDetail
    {
        public int Id { get; set; }
        public virtual Template AssociatedTemplate { get; set; }
        public string Label { get; set; }
        public string Type { get; set; }
        public int AssociatedTemplateId { get; set; }
    }
}