import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { LogoutComponent } from './logout/logout.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { PrimaryTransactionComponent } from './primary-transaction/primary-transaction.component';
import { SavingsTransactionComponent } from './savings-transaction/savings-transaction.component';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';
import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
 // {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'customers',component:CustomersListComponent},
  {path:'logout',component:LogoutComponent},
  {path:'transactions',component:TransactionListComponent},
  {path:'details/:id',component:TransactionDetailsComponent},
  {path:'primary',component:PrimaryTransactionComponent},
  {path:'savings',component:SavingsTransactionComponent},
  {path:'cdetails/:email',component:CustomersDetailsComponent},
  {path:'admin',component:AdminComponent},
  {path:'account',component:AccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
