import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as x from './career/index.exports';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: x.UserLoginComponent},
  { path: 'user/list', component: x.UserListComponent},
  { path: 'user/create', component: x.UserCreateComponent},
  { path: 'user/detail/:id', component: x.UserDetailComponent},
  { path: 'user/change/:id', component: x.UserChangeComponent},
  
  { path: '**', component: x.E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
