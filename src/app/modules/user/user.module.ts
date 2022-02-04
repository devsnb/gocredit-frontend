import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DisplayBillsComponent } from './display-bills/display-bills.component';
import { DisplayCreditCardsComponent } from './display-credit-cards/display-credit-cards.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { AddCreditCardComponent } from './add-credit-card/add-credit-card.component';
import { UpdateCreditCardComponent } from './update-credit-card/update-credit-card.component';
import { DeleteCreditCardComponent } from './delete-credit-card/delete-credit-card.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    DisplayBillsComponent,
    DisplayCreditCardsComponent,
    AddCreditCardComponent,
    UpdateCreditCardComponent,
    DeleteCreditCardComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule, RouterModule],
  exports: [
    UserProfileComponent,
    DisplayBillsComponent,
    DisplayCreditCardsComponent,
    AddCreditCardComponent,
    UpdateCreditCardComponent,
    DeleteCreditCardComponent,
  ],
})
export class UserModule {}
