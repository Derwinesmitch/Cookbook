import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: ShoppingListComponent }]),
    FormsModule,
    MatCardModule,
    MatListModule,
  ],
})
export class ShoppingListModule {}
