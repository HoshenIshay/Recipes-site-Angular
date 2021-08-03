import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipes } from 'src/models/Recipes';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  
  thisRecipe:Recipes;
  arrRecipes:Recipes[]=[];
  RecipeCode:string;
  ingredients:string[]=[""];
preperation:string[]=[""];
  constructor(public active:ActivatedRoute, public ser:RecipeService, private rout: Router) { }
 
  ngOnInit(): void {
    this.active.params.subscribe(succ=>{this.RecipeCode=succ.id});
    this.ser.getAll().subscribe(succ=>{this.arrRecipes=succ;console.log(succ);console.log(this.arrRecipes);
      this.ingredients = this.thisRecipe.RecipeIngredients;
 this.preperation = this.thisRecipe.RecipePreparationWay;
    },unsucc=>console.log("error"));
    this.thisRecipe= this.arrRecipes.find(r=>{r.RecipeCode==this.RecipeCode});
    
    this.thisRecipe=this.ser.specRecipe;
  }
 ifBirthday(){
   if (this.thisRecipe.CategoryCode=='1')
   return true;
   return false;
 }
 ifCookie(){
  if (this.thisRecipe.CategoryCode=='2')
  return true;
  return false;
}
ifCakey(){
  if (this.thisRecipe.CategoryCode=='3')
  return true;
  return false;
}
funcindex(index: any, item: any) {
  return index;
}
}
