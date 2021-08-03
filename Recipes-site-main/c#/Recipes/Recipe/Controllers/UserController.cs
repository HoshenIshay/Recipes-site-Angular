using Recipe.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Recipe.Controllers
{

    [EnableCors(origins: "*", methods: "*", headers: "*")]
    

    [RoutePrefix("api/users")]
    public class UserController : ApiController
    {
        [Route ("addUser")]
        [HttpPost]
        public string AddUser(User u)
        {
            User u2 = DB.UserList.FirstOrDefault(u3 => u3.UserCode == u.UserCode);
            if (u2 == null)
                DB.UserList.Add(u);
            return "succesfull";
        }
        [Route("all")]
        [HttpGet]
        public IHttpActionResult GetAllUsers()
        {
            return Ok(DB.UserList);
        }
        [Route ("checkPassword")]
        [HttpGet]
        public int CheckPassword(string UserName,string UserPassword)
        {
           
            User u3 = DB.UserList.FirstOrDefault(u => u.UserName == UserName);
            if (u3 == null)
                return 0;
            u3 = DB.UserList.FirstOrDefault(u => u.UserName == UserName && u.UserPassword == UserPassword);
               if(u3!=null)
                return u3.UserCode;
           return 2; 
            

            
        }
       

        
    }
}
