using Recipe.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Recipe.Controllers
{
    [EnableCors(origins: "*", methods: "*", headers: "*")]
    [RoutePrefix("api/recipes")]
    public class RcipeController : ApiController
    {
        [Route("all")]
        [HttpGet]
        public IHttpActionResult GetAllRecipes()
        {
            return Ok(DB.RecipeList);
        }

       
       [Route("delete")]
        [HttpGet]
        public IHttpActionResult delete(string id)
       {
           
           for (int i = 0; i < DB.RecipeList.Count; i++)
          {
              if (DB.RecipeList[i].RecipeCode == id)
                {
                    DB.RecipeList.Remove(DB.RecipeList[i]);
                    break;
                }
            }
            
           return GetAllRecipes();
        }

        [Route("saveChanges")]
        [HttpPost]
        public IHttpActionResult saveChanges(Recipes r)
        {

            for (int i = 0; i < DB.RecipeList.Count; i++)
            {
                if (DB.RecipeList[i].RecipeCode == r.RecipeCode)
                {
                    DB.RecipeList[i] = r;
                    break;
                }
            }

            return GetAllRecipes();
        }
        [Route("addRecipe")]
      [HttpPost]
     public IHttpActionResult AddRecipe(Recipes u)
      {
            Recipes u2 = DB.RecipeList.FirstOrDefault(u3 => u3.RecipeCode.Equals(u.RecipeCode));
           if (u2 == null)
                DB.RecipeList.Add(u);
            return GetAllRecipes();
        }


  }
    
}

