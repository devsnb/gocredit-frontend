import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DisplayBillsComponent } from './display-bills/display-bills.component';
import { DisplayCreditCardsComponent } from './display-credit-cards/display-credit-cards.component';



@NgModule({
  declarations: [
    UserProfileComponent,
    DisplayBillsComponent,
    DisplayCreditCardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
