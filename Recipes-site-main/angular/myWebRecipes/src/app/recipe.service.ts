import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipes } from 'src/models/Recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  constructor(public http:HttpClient) { }
  arrAllRecipes:Recipes[]=[];
  specRecipe:Recipes;
  getAll(){
    return (this.http.get<Recipes[]>("https://localhost:44355/api/recipes/all"))
  }
  
  getRecipeById(){
    return(this.http.get<Recipes>(""))
  }
  delete(idd){
    return(this.http.get<Recipes[]>("https://localhost:44355/api/recipes/delete?id="+idd))
  }
  addRecipe(New:Recipes){
    return(this.http.post<Recipes[]>("https://localhost:44355/api/recipes/addRecipe",New));
  }
  saveChanges(r:Recipes){
     return(this.http.post<Recipes[]>("https://localhost:44355/api/recipes/saveChanges",r));
  }
}
