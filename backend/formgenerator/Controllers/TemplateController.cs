using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using formgenerator.DataLayer;
using formgenerator.Models;
using formgenerator.data_layer;

namespace formgenerator.Controllers
{
    public class TemplateController : ApiController
    {
        public   TemplateData formdetails ;

        private readonly FormContext _FormContext;

        public TemplateController()
        {
            _FormContext = new FormContext();
        }
        [HttpPost]
        [Route("api/check")]
        public Response CreateSample(TemplateData sample)
        {
            var samples = sample;
             TemplateDetailsToDb(samples);
            return new Response
            {
                Validity = true
            };
        }
        //storing to 1st table in db
        void TemplateDetailsToDb(TemplateData samples)
        {

            var studentEntity = new Template
            {

                Name = samples.formname

            };
            _FormContext.Templates.Add(studentEntity);

            //storing to 2nd table in db
            foreach (var item in samples.formdetails)
            {
               
                var studentEntit = new TemplateDetail
                {

                    Label = item.label,
                    Type = item.type,
                    AssociatedTemplate = studentEntity
                    
            };
                _FormContext.TemplateDetails.Add(studentEntit);
            }
            _FormContext.SaveChanges();

        }
    }
}
