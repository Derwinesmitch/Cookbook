import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap, take, exhaustMap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Ingredient } from "./ingredient.model";
import { allRecipes } from "./allrecipes";
import { of } from "rxjs";
@Injectable({ providedIn: "root" })
export class DataStorageService {
  private recipes: allRecipes;

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService,
    private shoppingListService: ShoppingListService
  ) {
    this.fetchRecipes();
    // this.getAllRecipes();
  }

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

  // getAllRecipes() {
  //   let abc = [
  //     "a",
  //     "b",
  //     "c",
  //     "d",
  //     "e",
  //     "f",
  //     "g",
  //     "h",
  //     "i",
  //     "j",
  //     "k",
  //     "l",
  //     "m",
  //     "n",
  //     "o",
  //     "p",
  //     "q",
  //     "r",
  //     "s",
  //     "t",
  //     "u",
  //     "v",
  //     "w",
  //     "x",
  //     "y",
  //     "z",
  //   ];
  //   let allRecipes = [];

  //   const map1 = abc.map(async (x) => {
  //     try {
  //       // debugger;
  //       const response = await fetch(
  //         `http://www.themealdb.com/api/json/v1/1/search.php?f=${x}`,
  //         { cache: "no-cache" }
  //       );
  //       console.log(response);

  //       if (response.ok) {
  //         const jsonResponse = await response.json();
  //         console.log(jsonResponse);
  //         if (jsonResponse.meals !== null) {
  //           jsonResponse.meals.map((meal) => {
  //             allRecipes.push(meal);

  //             // const recipes = this.recipeService.getRecipes();
  //             // debugger;

  //             this.http
  //               .post(
  //                 "https://recipes-7ac13-default-rtdb.europe-west1.firebasedatabase.app.json",
  //                 meal
  //               )
  //               .subscribe((response) => {
  //                 console.log(response);
  //               });
  //           });
  //         }
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     console.log(allRecipes);
  //   });
  // }

  fetchRecipes() {
    // return this.http
    //   .get<Recipe[]>(
    //     "https://cooking-recipe-project-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
    //   )
    //   .pipe(
    //     map((recipes) => {
    //       return recipes.map((recipe) => {
    //         return {
    //           ...recipe,
    //           ingredients: recipe.ingredients ? recipe.ingredients : [],
    //         };
    //       });
    //     }),
    //     tap((recipes) => {
    //       this.recipeService.setRecipes(recipes);
    //     })
    //   );
    console.log(allRecipes);
    const recipes: Recipe[] = allRecipes;

    this.recipeService.setRecipes(recipes);

    return of(recipes);
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
