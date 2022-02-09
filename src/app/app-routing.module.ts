import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdminGuardGuard } from './components/admin-guard.guard';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserGuardGuard } from './components/user-guard.guard';
import { AddBillFormComponent } from './modules/admin/add-bill-form/add-bill-form.component';
import { BillsComponent } from './modules/admin/bills/bills.component';
import { CreditCardsComponent } from './modules/admin/credit-cards/credit-cards.component';
import { UserDetailsComponent } from './modules/admin/user-details/user-details.component';
import { UserListComponent } from './modules/admin/user-list/user-list.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { SignUpComponent } from './modules/auth/sign-up/sign-up.component';
import { AddCreditCardComponent } from './modules/user/add-credit-card/add-credit-card.component';
import { DeleteCreditCardComponent } from './modules/user/delete-credit-card/delete-credit-card.component';
import { DisplayBillsComponent } from './modules/user/display-bills/display-bills.component';
import { DisplayCreditCardsComponent } from './modules/user/display-credit-cards/display-credit-cards.component';
import { UpdateCreditCardComponent } from './modules/user/update-credit-card/update-credit-card.component';
import { UserProfileComponent } from './modules/user/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin/users',
    component: UserListComponent,
    canActivate: [AdminGuardGuard],
  },
  {
    path: 'me',
    component: UserProfileComponent,
    canActivate: [UserGuardGuard],
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
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'admin/users/:userId/credit-card/:cardId/bills',
    component: BillsComponent,
    canActivate: [AdminGuardGuard],
    canActivateChild: [AdminGuardGuard],
    children: [
      {
        path: 'add-bill',
        component: AddBillFormComponent,
      },
    ],
  },

  {
    path: 'admin/users/:userId/credit-card/:cardId/add-bill',
    component: AddBillFormComponent,
    canActivate: [AdminGuardGuard],
  },

  {
    path: 'admin/users',
    canActivate: [AdminGuardGuard],
    component: UserListComponent,
  },
  {
    path: 'admin/users/:userId',
    component: UserDetailsComponent,
    canActivate: [AdminGuardGuard],
    canActivateChild: [AdminGuardGuard],
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
    canActivate: [UserGuardGuard],
    canActivateChild: [UserGuardGuard],
    children: [
      {
        path: 'bills',
        component: DisplayBillsComponent,
      },
      {
        path: 'add-credit-card',
        component: AddCreditCardComponent,
      },
      {
        path: 'credit-cards',
        component: DisplayCreditCardsComponent,
        children: [
          {
            path: 'delete-credit-card',
            component: DeleteCreditCardComponent,
          },
        ],
      },
      {
        path: 'credit-cards/:cardId/update-credit-card',
        component: UpdateCreditCardComponent,
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
