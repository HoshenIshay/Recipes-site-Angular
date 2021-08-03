import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { LogOutComponent } from './log-out/log-out.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { ImagesDetailsComponent } from "./images-details/images-details.component";
import { PipeTimePipe } from './pipe-time.pipe';








@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RegisterComponent,
    LoginComponent,
    AllRecipesComponent,
    AddRecipeComponent,
   EditRecipeComponent,
   LogOutComponent,
   RecipeDetailsComponent,
   ImagesDetailsComponent,
   PipeTimePipe,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],


  entryComponents: [],
  schemas: []
})
export class AppModule { }
