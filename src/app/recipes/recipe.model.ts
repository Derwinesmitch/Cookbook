import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  public idMeal: string;
  public strMeal: string;
  public strDrinkAlternate: string;
  public strCategory: string;
  public strArea: string;
  public strInstructions: string;
  public strMealThumb: string;
  public strTags: string;
  public strYoutube: string;
  public strIngredient1: string;
  public strIngredient2: string;
  public strIngredient3: string;
  public strIngredient4: string;
  public strIngredient5: string;
  public strIngredient6: string;
  public strIngredient7: string;
  public strIngredient8: string;
  public strIngredient9: string;
  public strIngredient10: string;
  public strIngredient11: string;
  public strIngredient12: string;
  public strIngredient13: string;
  public strIngredient14: string;
  public strIngredient15: string;
  public strIngredient16: string;
  public strIngredient17: string;
  public strIngredient18: string;
  public strIngredient19: string;
  public strIngredient20: string;
  public strMeasure1: string;
  public strMeasure2: string;
  public strMeasure3: string;
  public strMeasure4: string;
  public strMeasure5: string;
  public strMeasure6: string;
  public strMeasure7: string;
  public strMeasure8: string;
  public strMeasure9: string;
  public strMeasure10: string;
  public strMeasure11: string;
  public strMeasure12: string;
  public strMeasure13: string;
  public strMeasure14: string;
  public strMeasure15: string;
  public strMeasure16: string;
  public strMeasure17: string;
  public strMeasure18: string;
  public strMeasure19: string;
  public strMeasure20: string;
  public strSource: string;
  public strImageSource: string;
  public strCreativeCommonsConfirmed: string;
  public dateModified: string;

  constructor(
    idMeal: string,
    strMeal: string,
    strDrinkAlternate: string,
    strCategory: string,
    strArea: string,
    strInstructions: string,
    strMealThumb: string,
    strTags: string,
    strYoutube: string,
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strIngredient5: string,
    strIngredient6: string,
    strIngredient7: string,
    strIngredient8: string,
    strIngredient9: string,
    strIngredient10: string,
    strIngredient11: string,
    strIngredient12: string,
    strIngredient13: string,
    strIngredient14: string,
    strIngredient15: string,
    strIngredient16: string,
    strIngredient17: string,
    strIngredient18: string,
    strIngredient19: string,
    strIngredient20: string,
    strMeasure1: string,
    strMeasure2: string,
    strMeasure3: string,
    strMeasure4: string,
    strMeasure5: string,
    strMeasure6: string,
    strMeasure7: string,
    strMeasure8: string,
    strMeasure9: string,
    strMeasure10: string,
    strMeasure11: string,
    strMeasure12: string,
    strMeasure13: string,
    strMeasure14: string,
    strMeasure15: string,
    strMeasure16: string,
    strMeasure17: string,
    strMeasure18: string,
    strMeasure19: string,
    strMeasure20: string,
    strSource: string,
    strImageSource: string,
    strCreativeCommonsConfirmed: string,
    dateModified: string
  ) {
    this.idMeal = idMeal;
    this.strMeal = strMeal;
    this.strDrinkAlternate = strDrinkAlternate;
    this.strCategory = strCategory;
    this.strArea = strArea;
    this.strInstructions = strInstructions;
    this.strMealThumb = strMealThumb;
    this.strTags = strTags;
    this.strYoutube = strYoutube;
    this.strIngredient1 = strIngredient1;
    this.strIngredient2 = strIngredient2;
    this.strIngredient3 = strIngredient3;
    this.strIngredient4 = strIngredient4;
    this.strIngredient5 = strIngredient5;
    this.strIngredient6 = strIngredient6;
    this.strIngredient7 = strIngredient7;
    this.strIngredient8 = strIngredient8;
    this.strIngredient9 = strIngredient9;
    this.strIngredient10 = strIngredient10;
    this.strIngredient11 = strIngredient11;
    this.strIngredient12 = strIngredient12;
    this.strIngredient13 = strIngredient13;
    this.strIngredient14 = strIngredient14;
    this.strIngredient15 = strIngredient15;
    this.strIngredient16 = strIngredient16;
    this.strIngredient17 = strIngredient17;
    this.strIngredient18 = strIngredient18;
    this.strIngredient19 = strIngredient19;
    this.strIngredient20 = strIngredient20;
    this.strMeasure1 = strMeasure1;
    this.strMeasure2 = strMeasure2;
    this.strMeasure3 = strMeasure3;
    this.strMeasure4 = strMeasure4;
    this.strMeasure5 = strMeasure5;
    this.strMeasure6 = strMeasure6;
    this.strMeasure7 = strMeasure7;
    this.strMeasure8 = strMeasure8;
    this.strMeasure9 = strMeasure9;
    this.strMeasure10 = strMeasure10;
    this.strMeasure11 = strMeasure11;
    this.strMeasure12 = strMeasure12;
    this.strMeasure13 = strMeasure13;
    this.strMeasure14 = strMeasure14;
    this.strMeasure15 = strMeasure15;
    this.strMeasure16 = strMeasure16;
    this.strMeasure17 = strMeasure17;
    this.strMeasure18 = strMeasure18;
    this.strMeasure19 = strMeasure19;
    this.strMeasure20 = strMeasure20;
    this.strSource = strSource;
    this.strImageSource = strImageSource;
    this.strCreativeCommonsConfirmed = strCreativeCommonsConfirmed;
    this.dateModified = dateModified;
  }
}

// idMeal: "52764",
// strMeal: "Garides Saganaki",
// strDrinkAlternate: null,
// strCategory: "Seafood",
// strArea: "Greek",
// strInstructions:
//   "Place the prawns in a pot and add enough water to cover. Boil for 5 minutes. Drain, reserving the liquid, and set aside.\r\nHeat 2 tablespoons of oil in a saucepan. Add the onion; cook and stir until soft. Mix in the parsley, wine, tomatoes, garlic and remaining olive oil. Simmer, stirring occasionally, for about 30 minutes, or until the sauce is thickened.\r\nWhile the sauce is simmering, the prawns should become cool enough to handle. First remove the legs by pinching them, and then pull off the shells, leaving the head and tail on.\r\nWhen the sauce has thickened, stir in the prawns. Bring to a simmer again if the sauce has cooled with the prawns, and cook for about 5 minutes. Add the feta and remove from the heat. Let stand until the cheese starts to melt. Serve warm with slices of crusty bread.\r\nThough completely untraditional, you can add a few tablespoons of stock or passata to this recipe to make a delicious pasta sauce. Toss with pasta after adding the feta, and serve.",
// strMealThumb:
//   "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg",
// strTags: "Seafood,Shellfish",
// strYoutube: "https://www.youtube.com/watch?v=uO0ejc85zSE",
// strIngredient1: "Raw king prawns",
// strIngredient2: "Olive oil",
// strIngredient3: "Chopped onion",
// strIngredient4: "Freshly chopped parsley",
// strIngredient5: "White wine",
// strIngredient6: "Chopped tomatoes",
// strIngredient7: "Minced garlic",
// strIngredient8: "Cubed Feta cheese",
// strIngredient9: "",
// strIngredient10: "",
// strIngredient11: "",
// strIngredient12: "",
// strIngredient13: "",
// strIngredient14: "",
// strIngredient15: "",
// strIngredient16: null,
// strIngredient17: null,
// strIngredient18: null,
// strIngredient19: null,
// strIngredient20: null,
// strMeasure1: "500g",
// strMeasure2: "3 tablespoons",
// strMeasure3: "1",
// strMeasure4: "pinch",
// strMeasure5: "250ml",
// strMeasure6: "1 (400g) tin",
// strMeasure7: "1/2 teaspoon",
// strMeasure8: "1 (200g) pack",
// strMeasure9: "",
// strMeasure10: "",
// strMeasure11: "",
// strMeasure12: "",
// strMeasure13: "",
// strMeasure14: "",
// strMeasure15: "",
// strMeasure16: null,
// strMeasure17: null,
// strMeasure18: null,
// strMeasure19: null,
// strMeasure20: null,
// strSource: null,
// strImageSource: null,
// strCreativeCommonsConfirmed: null,
// dateModified: null,

// export class Recipe {
//   public name: string;
//   public description: string;
//   public imagePath: string;
//   public ingredients: Ingredient[] = [];
//   public steps: string;
//   public duration: string;

//   constructor(
//     name: string,
//     desc: string,
//     imagePath: string,
//     ingredients: Ingredient[],
//     steps: string,
//     duration: string
//   ) {
//     this.name = name;
//     this.description = desc;
//     this.imagePath = imagePath;
//     this.ingredients = ingredients;
//     this.steps = steps;
//     this.duration = duration;
//   }
// }
