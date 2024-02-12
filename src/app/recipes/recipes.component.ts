import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent implements OnInit {
  recipeSelected: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // this.getAllRecipes();
  }

  onRecipeSelected(selected: boolean) {
    this.recipeSelected = selected;
  }

  oneNewRecipe() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
