using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using formgenerator.DataLayer;
using formgenerator.Models;


namespace formgenerator.Controllers
{
    public class LoginController : ApiController
    {
        private readonly FormContext _FormContext;

        public LoginController()
        {
            _FormContext = new FormContext();
        }
        [HttpPost]
        [Route("api/Login")]
        public Response Login(UserDetails loginUser)
        {
            //taking data from db
            var users = _FormContext.Users.AsEnumerable();
            //checking with db data
            var user = _FormContext.Users.
                Where(u => u.username == loginUser.username && u.password == loginUser.password)
                .FirstOrDefault();
            //checking response
            if (user == null)
            {
                return new Response
                {
                    Validity = false
                };
            }
           
            return new Response
            {
                Validity = true
            };
        }
    }
}



