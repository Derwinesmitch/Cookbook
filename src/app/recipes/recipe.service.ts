import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      "French Apple Cake",
      "Perfect for kaffee und kuchen",
      "https://www.allrecipes.com/thmb/1hg2zSq53KOtNHs-cT6Uv8FOlQc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7963451FrenchAppleCakeChefJohn4x3-20187dca9e214f569450a6f4d3ad219d.jpg",
      [
        new Ingredient("Baking Apple", 3),
        new Ingredient("Cup of Flour", 1),
        new Ingredient("Large Egg", 1),
      ]
    ),
    new Recipe(
      "Caprese Salad",
      "Light but Delicious",
      "https://www.allrecipes.com/thmb/eE8Y1xRVY9nxwZ7UwRWp53WNrsw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1018869-400586536fcc4e77a22223465b65e095.jpg",
      [
        new Ingredient("Tomatoes", 3),
        new Ingredient("Mozzarella Cheese", 1),
        new Ingredient("Basil Leaves", 5),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
