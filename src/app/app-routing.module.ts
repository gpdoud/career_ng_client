import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as x from './career/index.exports';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: x.UserLoginComponent},

  { path: 'companymaster/list', component: x.CompanyMasterListComponent},
  { path: 'companymaster/create', component: x.CompanyMasterCreateComponent},
  { path: 'companymaster/detail/:id', component: x.CompanyMasterDetailComponent},
  { path: 'companymaster/change/:id', component: x.CompanyMasterChangeComponent},
  
  { path: 'user/list', component: x.UserListComponent},
  { path: 'user/create', component: x.UserCreateComponent},
  { path: 'user/detail/:id', component: x.UserDetailComponent},
  { path: 'user/change/:id', component: x.UserChangeComponent},

  { path: 'help', component: x.HelpComponent},
  
  { path: '**', component: x.E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
