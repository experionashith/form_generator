using formgenerator.data_layer;
using formgenerator.DataLayer;
using formgenerator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace formgenerator.Controllers
{
    public class TemplateListController : ApiController
    {
        private readonly FormContext _FormContext;

        public TemplateListController()
        {
            _FormContext = new FormContext();
        }
        public IEnumerable<Template> GetSample()
        {
            
            var CourseListing = _FormContext.Templates.AsEnumerable();
            
           
            return CourseListing;
        }
         [HttpPost]
        [Route("api/return")]
        public IEnumerable<ReturnForm>  CreateSample(DisplayForm sample)
        {

            // var users = _FormContext.TemplateDetails.AsEnumerable();

            var User = _FormContext.TemplateDetails
                .Where(u => u.AssociatedTemplateId == sample.formid)
                .Select(u => new ReturnForm { Label = u.Label, Type = u.Type }).AsEnumerable();

            return User;
        }
       



    }

}
