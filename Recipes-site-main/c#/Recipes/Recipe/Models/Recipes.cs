using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Recipe.Models
{
    public class Recipes
    {
        public string RecipeCode { get; set; }
        public string RecipeName { get; set; }

        public string CategoryCode { get; set; }
        public int RecipePreparationTime { get; set; }
        public string RecipeLevel { get; set; }
        public DateTime RecipeAdd { get; set; }
        public List<string> RecipeIngredients { get; set; }
        public List<string> RecipePreparationWay { get; set; }
        public string UserCode { get; set; }
        public string RecipeRoutImage { get; set; }
        public bool RecipeIsShow { get; set; }


    }
}