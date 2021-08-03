import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogOutComponent } from './log-out/log-out.component';
import { RegisterComponent } from './register/register.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeDetailsComponent }from './recipe-details/recipe-details.component';
import {EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { from } from 'rxjs';
import { RecipeComponent } from './recipe/recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';



const routes: Routes = [
  { path:'login',component: LoginComponent},
  {path:'register/:id',component:RegisterComponent},
  {path:'logOut',component: LogOutComponent},
  {path:'register',component: RegisterComponent},
  {path:'allRecipes',component: AllRecipesComponent},
  {path: 'recipeDetails/:id', component:RecipeDetailsComponent},
{path: 'editRecipe/:id', component:EditRecipeComponent},
{path:'recipe/:id',component:RecipeComponent},
{path:'addRecipe',component:AddRecipeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
