import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipes } from 'src/models/Recipes';
import Swal from 'sweetalert2';
import { RecipeService } from '../recipe.service';



@Component({
  selector: 'app-images-details',
  templateUrl: './images-details.component.html',
  styleUrls: ['./images-details.component.css']
})



export class ImagesDetailsComponent implements OnInit{
constructor(private route: Router, public ser: RecipeService) { }
  @Input()
  thisRecipe: Recipes;
  arrRecipe:Recipes[]=[];
  w: string;
  t;
  arrLevel=[];
  ifCanEdit() {
    this.w = localStorage.getItem("user");
    if (this.w == this.thisRecipe.UserCode)
      return true;
    return false;
  }
 specRecipe(idRecipe:string){
  this.ser.specRecipe=this.thisRecipe;
  if(localStorage.getItem("user"))
    this.route.navigate(["recipe",idRecipe]);
  }
  edit(id:string){
    this.ser.specRecipe=this.thisRecipe;
    this.route.navigate(["editRecipe",id]);
  }
  delete(id:string){
    this.ser.specRecipe=this.thisRecipe;
    Swal.fire({
      title: '?האם הינך בטוח שברצונך למחוק את המתכון',
      text: 'מחיקת מתכון מוחקת אותו לצמיתות',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancal'
    }).then((result) => {
      if (result.value) {
        console.log(this.arrRecipe);
      this.ser.delete(id).subscribe(succ=>{
         Swal.fire(
         'Deleted!',
          'המתכון נמחק בהצלחה',
          'success',
          
        ),this.ser.arrAllRecipes=succ;
        this.arrRecipe=this.ser.arrAllRecipes;
        // 
        this.t=setInterval(f=>(window.location.reload()),1500) ;
          this.route.navigate(["allRecipes"]);
       
        },unsucc=>{console.log("error");}
      
      )}
        
       else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'המתכון נשאר',
          'איזה כיף :)',

          
        ),
        this.route.navigate(["allRecipes"]);
      }
    })
  }
  ngOnInit(): void {
    this.ser.getAll().subscribe(succ=>{this.arrRecipe=succ;this.ser.arrAllRecipes=succ;console.log(succ);console.log(this.arrRecipe);
     let y=(Number)(this.thisRecipe.RecipeLevel);
      for(let i=0;i<y;i++){
          this.arrLevel.push("  ");}
    },unsucc=>console.log("error"));
    console.log("imgeRecipe");
   
 

}

}
