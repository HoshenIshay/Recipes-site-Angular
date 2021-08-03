import { Component, OnInit } from '@angular/core';
import { Recipes } from 'src/models/Recipes';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {

  constructor(public reci:RecipeService) { }
arrRecipes:Recipes[]=[];
arrFilter:Recipes[]=[];
catego:string;
sear:string;
arrCat=["1","2","3"];
time:number;
ezer;
  ngOnInit(): void {
    this.reci.getAll().subscribe(succ=>{this.arrRecipes=succ,this.reci.arrAllRecipes=succ,console.log(succ),console.log(this.arrRecipes),this.arrFilter=succ},unsucc=>console.log("error"));
  }
 search(){
   this.arrFilter=this.arrRecipes;
   if(this.sear!=null&&this.sear!="")
   this.arrFilter=this.arrFilter.filter(r=>r.RecipeName.includes(this.sear));
   console.log(this.arrFilter)
  if(this.catego!=null&&this.catego!=""&&this.catego!="4"){
   for (let i = 0; i < this.arrCat.length; i++) 
     if(this.arrCat[i]=this.catego)
         this.arrFilter=this.arrFilter.filter(f=>f.CategoryCode==this.catego);
  console.log(this.arrFilter)
   }else if(this.catego=="4"){}
if(this.time>0)
this.arrFilter=this.arrFilter.filter(f=>f.RecipePreparationTime<=this.time)

console.log(this.arrFilter);
 }
 clear(){
   this.catego="4";
   this.time=null;
   this.sear="";
  this.reci.getAll().subscribe(succ=>{this.arrRecipes=succ,this.reci.arrAllRecipes=succ,console.log(succ),console.log(this.arrRecipes),this.arrFilter=this.arrRecipes},unsucc=>console.log("error"));
 }
}
