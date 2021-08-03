import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  Recipes } from 'src/models/Recipes';
import Swal from 'sweetalert2';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
thisRecipe:Recipes;
RecipeCodea:string;
arrRecipes:Recipes[]=[];
ingredients:string[]=[""];
preperation:string[]=[""];
image:string;
category:string;
level:string;
yes;
no;
count=0;


  constructor(public active:ActivatedRoute, public ser:RecipeService, private rout: Router) { }

  ngOnInit(): void {
    

    this.active.params.subscribe(succ => {

      this.RecipeCodea = succ.id;

      this.ser.getAll().subscribe(succ => {

          this.arrRecipes = succ;

          console.log(succ);

          console.log(this.arrRecipes);

          this.thisRecipe = this.arrRecipes.find(r => { r.RecipeCode == this.RecipeCodea });

          console.log(this.thisRecipe);

          this.thisRecipe = this.ser.specRecipe;

          this.ingredients = this.thisRecipe.RecipeIngredients;

          this.preperation = this.thisRecipe.RecipePreparationWay;

      } , unsucc => console.log("error")); });

  if(this.category == "1")

  this.category = "עוגות יום הולדת";

  else if(this.category == "2")

  this.category = "עוגיות";

  else

  this.category = "עוגות";


  }
  addInputPrep(){
    console.log("aaa");
    this.preperation=this.preperation.filter(item =>item!="");
    this.preperation.push("");
  }
  addInputIng(){
    console.log("aaa");
    this.ingredients=this.ingredients.filter(item =>item!="");
    this.ingredients.push("");
  }
  funcindex(index: any, item: any) {
    return index;
  }
  saveChanges(){
    console.log(this.thisRecipe)
    this.thisRecipe.UserCode=localStorage.getItem("user");
    if(this.ingredients.length>1){
    this.ingredients=this.ingredients.filter(item =>item!="");
    this.thisRecipe.RecipeIngredients=this.ingredients;}
    if(this.preperation.length>1){
    this.preperation=this.preperation.filter(item =>item!="");
    this.thisRecipe.RecipePreparationWay=this.preperation;}
    console.log(this.thisRecipe);
    
  
if(this.thisRecipe.RecipeCode==null){this.count=0;console.log(this.count)
Swal.fire({
  title: 'שכחת למלא קוד מתכון',
  icon: 'error'
});
}
else 
this.count++;
if(this.thisRecipe.RecipeName==null){this.count=0;console.log(this.count)
Swal.fire({
  title: 'שכחת למלא שם מתכון',
  icon: 'error'
});
}
else 
this.count++;
if(this.thisRecipe.RecipePreparationTime==null){this.count=0;console.log(this.count)
Swal.fire({
  title: 'יש לרשום מספר דקות להכנת המתכון',
  icon: 'error'
});
}
else
this.count++;
 if(this.thisRecipe.CategoryCode==null){this.count=0;console.log(this.count)
Swal.fire({
  title: 'יש לבחור קטגורית מתכון',
  icon: 'error'
});
}
else
this.count++;
if(this.ingredients[0]==""){this.count=0;console.log(this.count)
Swal.fire({
  title: 'יש לרשום מצרכים דרושים',
  icon: 'error'
});
}
else 
this.count++;
if(this.preperation[0]==""){this.count=0;console.log(this.count)
Swal.fire({
  title: 'יש לרשום הוראות הכנה',
  icon: 'error'
});
}
else 
this.count++;
if(this.thisRecipe.RecipeLevel==null){this.count=0;console.log(this.count)
Swal.fire({
  title: "יש לבחור דרגת קושי",
  icon: 'error'
});}
else
this.count++;
console.log(this.count)

// else if(this.newRecipe.RecipeLevel=null)
// Swal.fire({
//   title: 'יש לבחור דרגת קושי',
//   icon: 'error'
// });
if(this.count>=7){
    this.thisRecipe.RecipeAdd=(new Date());
    console.log(this.thisRecipe.RecipeAdd);
    this.thisRecipe.UserCode=localStorage.getItem("user");
    this.ingredients=this.ingredients.filter(item =>item!="");
    this.thisRecipe.RecipeIngredients=this.ingredients;
    
    this.preperation=this.preperation.filter(item =>item!="");
    this.thisRecipe.RecipePreparationWay=this.preperation;
    
    console.log(this.thisRecipe);
  console.log(this.category);
  this.thisRecipe.CategoryCode=this.category;
  this.thisRecipe.RecipeLevel=this.level;


 
    this.ser.saveChanges(this.thisRecipe).subscribe(succ=>{console.log("succ");
  this.rout.navigate(["allRecipes"]);this.count=0
  Swal.fire(
    'Added!',
     'המתכון עודכן בהצלחה',
     'success',
     
   )
},unsucc=>{console.log("error")});
}}

 
  
  cancal(){
    this.rout.navigate(["allRecipes"]);
  }
}
