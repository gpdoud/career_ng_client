import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as x from './career/index.exports';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: x.UserLoginComponent},

  { path: 'customermaster/list', component: x.CustomerMasterListComponent},
  { path: 'customermaster/create', component: x.CustomerMasterCreateComponent},
  { path: 'customermaster/detail/:id', component: x.CustomerMasterDetailComponent},
  { path: 'customermaster/change/:id', component: x.CustomerMasterChangeComponent},
  
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
