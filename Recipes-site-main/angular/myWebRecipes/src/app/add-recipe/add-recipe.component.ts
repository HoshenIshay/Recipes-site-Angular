import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Recipes } from 'src/models/Recipes';
import Swal from 'sweetalert2';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
newRecipe:Recipes=new Recipes();
ingredients:string[]=[""];
preperation:string[]=[""];
image:string;
category:string;
level:string;
yes;
no;
count=0;
arrRecipes:Recipes[]=[];

  constructor(private route: Router, public ser: RecipeService) { }

  ngOnInit(): void {
    this.ser.getAll().subscribe(succ=>{this.arrRecipes=succ,this.ser.arrAllRecipes=succ,console.log(succ),console.log(this.arrRecipes)},unsucc=>console.log("error"));
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
  addRecipe(){
    console.log(this.newRecipe)
    this.newRecipe.UserCode=localStorage.getItem("user");
    if(this.ingredients.length>1){
    this.ingredients=this.ingredients.filter(item =>item!="");
    this.newRecipe.RecipeIngredients=this.ingredients;}
    if(this.preperation.length>1){
    this.preperation=this.preperation.filter(item =>item!="");
    this.newRecipe.RecipePreparationWay=this.preperation;}
    this.newRecipe.RecipeRoutImage="../assets/chock.jpg";
    console.log(this.newRecipe);
    this.newRecipe.CategoryCode=this.category;
    this.newRecipe.RecipeLevel=this.level;
if(this.newRecipe.RecipeCode==null){this.count=0;console.log(this.count)
Swal.fire({
  title: 'שכחת למלא קוד מתכון',
  icon: 'error'
});
}
else 
this.count++;
if(this.newRecipe.RecipeName==null){this.count=0;console.log(this.count)
Swal.fire({
  title: 'שכחת למלא שם מתכון',
  icon: 'error'
});
}
else 
this.count++;
if(this.newRecipe.RecipePreparationTime==null){this.count=0;console.log(this.count)
Swal.fire({
  title: 'יש לרשום מספר דקות להכנת המתכון',
  icon: 'error'
});
}
else
this.count++;
 if(this.newRecipe.CategoryCode==null){this.count=0;console.log(this.count)
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
if(this.newRecipe.RecipeLevel==null){this.count=0;console.log(this.count)
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
    this.newRecipe.RecipeAdd=(new Date());
    console.log(this.newRecipe.RecipeAdd);
    this.newRecipe.UserCode=localStorage.getItem("user");
    this.ingredients=this.ingredients.filter(item =>item!="");
    this.newRecipe.RecipeIngredients=this.ingredients;
    
    this.preperation=this.preperation.filter(item =>item!="");
    this.newRecipe.RecipePreparationWay=this.preperation;
    this.newRecipe.RecipeRoutImage="../assets/chock.jpg";
    console.log(this.newRecipe);
  console.log(this.category);
  this.newRecipe.CategoryCode=this.category;
  this.newRecipe.RecipeLevel=this.level;
for(let i=0;i<this.arrRecipes.length;i++)
   if (this.arrRecipes[i].RecipeCode==this.newRecipe.RecipeCode){
   Swal.fire({
  title: "קיים מתכון בעל קוד זה אנא החלף קוד מתכון",
  icon: 'error'
});
break;
 }

  else{
    this.ser.addRecipe(this.newRecipe).subscribe(succ=>{console.log("succ");
  this.route.navigate(["allRecipes"]);this.count=0
  Swal.fire(
    'Added!',
     'המתכון נוסף בהצלחה',
     'success',
     
   )
},unsucc=>{console.log("error")});
}}

}
cancal(){
  this.route.navigate(["allRecipes"]);
}

}
