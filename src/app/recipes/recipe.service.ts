import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is a test desc",
      "https://cdn.pixabay.com/photo/2017/04/08/14/37/kitchen-2213422_960_720.jpg"
    ),
    new Recipe(
      "A Test Recipe",
      "This is a test desc",
      "https://cdn.pixabay.com/photo/2017/04/08/14/37/kitchen-2213422_960_720.jpg"
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
