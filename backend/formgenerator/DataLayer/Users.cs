using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Linq;
using System.ComponentModel.DataAnnotations;


namespace formgenerator.data_layer
{
    public class User
    {
        public int Id { get; set; }
        public string username { get; set; }
        public string password { get; set; }
    }
}