import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[] = [];
  public steps: string;
  public duration: string;

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingredients: Ingredient[],
    steps: string,
    duration: string
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
  }
}
