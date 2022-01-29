import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddBillFormComponent } from './modules/admin/add-bill-form/add-bill-form.component';
import { BillsComponent } from './modules/admin/bills/bills.component';
import { CreditCardsComponent } from './modules/admin/credit-cards/credit-cards.component';
import { UserDetailsComponent } from './modules/admin/user-details/user-details.component';
import { UserListComponent } from './modules/admin/user-list/user-list.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { DisplayBillsComponent } from './modules/user/display-bills/display-bills.component';
import { DisplayCreditCardsComponent } from './modules/user/display-credit-cards/display-credit-cards.component';
import { UserProfileComponent } from './modules/user/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin/users/:userId/cards/:cardId/bills',
    component: BillsComponent,
    children: [
      {
        path: 'add-bill',
        component: AddBillFormComponent,
      },
    ],
  },
  {
    path: 'admin/users',
    component: UserListComponent,
  },
  {
    path: 'admin/users/:id',
    component: UserDetailsComponent,
    children: [
      {
        path: 'cards',
        component: CreditCardsComponent,
      },
    ],
  },
  {
    path: 'me',
    component: UserProfileComponent,
    children: [
      {
        path: 'bills',
        component: DisplayBillsComponent,
      },
      {
        path: 'credit-cards',
        component: DisplayCreditCardsComponent,
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
