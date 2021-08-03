import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';
  constructor(public ser:RecipeService){}
  showRecipes(){
this.ser.getAll().subscribe(succ=>{console.log(succ)},err=>{console.log(err)})
  }
  
  ifCanEdit() {
   
    if (localStorage.getItem("user"))
      return true;
    return false;
  }
}
