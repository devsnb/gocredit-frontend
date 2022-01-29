import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { AddBillFormComponent } from './add-bill-form/add-bill-form.component';
import { BillsComponent } from './bills/bills.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    CreditCardsComponent,
    AddBillFormComponent,
    BillsComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule, FormsModule],
})
export class AdminModule {}
