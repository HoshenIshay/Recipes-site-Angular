import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipes } from 'src/models/Recipes';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(public active:ActivatedRoute, public ser:RecipeService, private rout: Router) { }
  thisRecipe:Recipes;
  // icon:string="./assets/";


  ngOnInit(): void {
  }

}
