import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../../recipe.model";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  flagUrl: string;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFlagUrl();
  }

  // getFlagUrl gets the URL for the flag based on the country and sets it to flagUrl //
  getFlagUrl() {
    if (this.recipe && this.recipe.strArea) {
      const countryName = this.recipe.strArea;
      const countryCode = this.getCountryCode(countryName);
      if (countryCode) {
        this.flagUrl = `https://flagpedia.net/data/flags/w580/${countryCode}.webp`;
      }
    }
  }

  // getCountryCode returns country code based on the country name //

  getCountryCode(countryName: string): string {
    const countryCodeMap: { [key: string]: string } = {
      Italian: "it",
      British: "gb",
      Moroccan: "ma",
      American: "us",
      Spanish: "es",
      Greek: "gr",
      French: "fr",
      Canadian: "ca",
      Jamaican: "jm",
      Chinese: "cn",
      Dutch: "nl",
      Egyptian: "eg",
      Indian: "in",
      Irish: "ie",
      Japanese: "jp",
      Korean: "kr",
      Malaysian: "my",
      Mexican: "mx",
      Croatian: "hr",
      Norwegian: "no",
      Portuguese: "pt",
      Russian: "ru",
      "Saudi Arabian": "sa",
      Slovak: "sk",
      Thai: "th",
      Vietnamese: "vn",
      Turkish: "tr",
      Syrian: "sy",
      Algerian: "dz",
      Tunisian: "tn",
      Polish: "pl",
      Filipino: "ph",
      Kenyan: "kn",
    };

    const countryCode = countryCodeMap[countryName];

    return countryCode;
  }
}
