import { Component, OnInit } from "@angular/core";
import {
  Form,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RecipeService } from "../recipe.service";
import { DataStorageService } from "src/app/shared/data-storage.service";
@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  get ingredientsControls() {
    return (this.recipeForm.get("ingredients") as FormArray).controls;
  }

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.updateRecipe();
    this.onCancel();
  }

  onAddIngredient() {
    const newIngredient = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
      ]),
    });
    (<FormArray>this.recipeForm.get("ingredients")).push(newIngredient);
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get("ingredients")).removeAt(index);
  }

  onCancel() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  updateRecipe() {
    this.dataStorageService.storeRecipes();
    this.dataStorageService.storeShoppingList();
  }

  private initForm() {
    let recipeName = "";
    let recipeImagePath = "";
    let recipeDescription = "";
    let recipeIngredients = new FormArray([]);
    let recipeSteps = "";
    let recipeTags = "";
    let recipeArea = "";

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.strMeal;
      recipeImagePath = recipe.strMealThumb;
      recipeDescription = recipe.strCategory;
      recipeSteps = recipe.strInstructions;
      recipeTags = recipe.strTags;
      recipeArea = recipe.strArea;

      for (let i = 1; i <= 20; i++) {
        const ingredientName = recipe[`strIngredient${i}`];
        const ingredientAmount = recipe[`strMeasure${i}`];

        if (ingredientName && ingredientName.trim() !== "") {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredientName, Validators.required),
              amount: new FormControl(ingredientAmount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }

    recipeIngredients.push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
      steps: new FormControl(recipeSteps, Validators.required),
      tags: new FormControl(recipeTags, Validators.required),
      area: new FormControl(recipeArea, Validators.required),
    });
  }
}
