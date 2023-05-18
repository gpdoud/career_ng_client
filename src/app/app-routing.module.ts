import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E404Component } from './misc/e404/e404.component';

import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserChangeComponent } from './user/user-change/user-change.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: UserLoginComponent},
  { path: 'user/list', component: UserListComponent},
  { path: 'user/create', component: UserCreateComponent},
  { path: 'user/detail/:id', component: UserDetailComponent},
  { path: 'user/change/:id', component: UserChangeComponent},
  
  { path: '**', component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
