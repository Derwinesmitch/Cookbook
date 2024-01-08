import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap, take, exhaustMap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Ingredient } from "./ingredient.model";
@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService,
    private shoppingListService: ShoppingListService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        "https://cooking-recipe-project-default-rtdb.europe-west1.firebasedatabase.app/recipes.json",
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        "https://cooking-recipe-project-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }

  // stores the current shopping list in the firebase database
  storeShoppingList() {
    const ingredients = this.shoppingListService.getIngredients();
    this.http
      .put(
        "https://cooking-recipe-project-default-rtdb.europe-west1.firebasedatabase.app/shopping-list.json",
        ingredients
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  // retrieves the stored shopping list ingredients from the firebase database
  fetchShoppingList() {
    return this.http
      .get<Ingredient[]>(
        "https://cooking-recipe-project-default-rtdb.europe-west1.firebasedatabase.app/shopping-list.json"
      )
      .subscribe((ingredients) => {
        this.shoppingListService.setIngredients(ingredients);
      });
  }
}
