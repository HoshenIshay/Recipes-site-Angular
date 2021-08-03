using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Recipe.Models
{
    public class User
    {
        public int UserCode{ get; set; }
        public string UserName { get; set; }
        public string UserAddress { get; set; }
        public string UserMail { get; set; }
        public string UserPassword { get; set; }


    }
}