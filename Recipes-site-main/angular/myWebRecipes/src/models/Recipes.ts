export class Recipes{
    constructor(public RecipeCode?:string,public RecipeName?:string,public CategoryCode?:string,
        public RecipePreparationTime?:number,public RecipeLevel?:string,public RecipeAdd?:Date,
        public RecipeIngredients?,public RecipePreparationWay?,
        public UserCode?:string,public RecipeRoutImage?:string,public RecipeIsShow?:boolean){
         
        }
}