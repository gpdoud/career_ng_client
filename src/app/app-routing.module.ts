import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as x from './career/index.exports';
import { RevisionComponent } from './misc/revision/revision.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: x.UserLoginComponent},

  { path: 'company/list', component: x.CompanyListComponent},
  { path: 'company/create', component: x.CompanyCreateComponent},
  { path: 'company/detail/:id', component: x.CompanyDetailComponent},
  { path: 'company/change/:id', component: x.CompanyChangeComponent},
  
  { path: 'companyconnection/list', component: x.CompanyConnectionListComponent},
  { path: 'companyconnection/create', component: x.CompanyConnectionCreateComponent},
  { path: 'companyconnection/change/:id', component: x.CompanyConnectionChangeComponent},
  
  { path: 'companymaster/list', component: x.CompanyMasterListComponent},
  { path: 'companymaster/create', component: x.CompanyMasterCreateComponent},
  { path: 'companymaster/detail/:id', component: x.CompanyMasterDetailComponent},
  { path: 'companymaster/change/:id', component: x.CompanyMasterChangeComponent},
  
  { path: 'opportunity/list', component: x.OpportunityListComponent},
  { path: 'opportunity/create', component: x.OpportunityCreateComponent},
  { path: 'opportunity/detail/:id', component: x.OpportunityDetailComponent},
  { path: 'opportunity/change/:id', component: x.OpportunityChangeComponent},
  
  { path: 'user/list', component: x.UserListComponent},
  { path: 'user/create', component: x.UserCreateComponent},
  { path: 'user/detail/:id', component: x.UserDetailComponent},
  { path: 'user/change/:id', component: x.UserChangeComponent},

  { path: 'help', component: x.HelpComponent},
  { path: 'revision', component: RevisionComponent},
  
  { path: '**', component: x.E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
