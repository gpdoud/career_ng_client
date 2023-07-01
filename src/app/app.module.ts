import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppInitService } from './app-init.service';
import * as x from './career/index.exports';
import { RouterModule } from '@angular/router';



export const startupServiceFactory = (appinit: AppInitService) => {
  return () => appinit.getSettings();
}

@NgModule({
  declarations: [
    AppComponent,

    x.CompanySearchPipe,
    x.CompanyListComponent,x.CompanyDetailComponent,x.CompanyChangeComponent,x.CompanyCreateComponent,

    x.CompanyConnectionListComponent,
    x.CompanyConnectionCreateComponent,
    x.CompanyConnectionChangeComponent,
    x.CompanyConnectionSearchPipe,

    x.CompanyMasterListComponent, x.CompanyMasterDetailComponent,
    x.CompanyMasterCreateComponent, x.CompanyMasterChangeComponent,
    x.CompanyMasterSearchPipe,
    
    x.OpportunityListComponent,x.OpportunityDetailComponent,
    x.OpportunityCreateComponent,x.OpportunityChangeComponent,

    x.UserLoginComponent,x.UserListComponent,x.UserDetailComponent,
    x.UserCreateComponent,x.UserChangeComponent,x.UserSearchPipe,
    
    x.E404Component, x.BoolDisplayPipe,x.MenuComponent,
    x.SortPipe,
    x.HeaderComponent,
    x.FooterComponent,
    x.PageTitleComponent,
    x.HelpComponent,
    x.RevisionComponent,
    x.OpportunitySearchPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule,
    AppRoutingModule
  ],
  exports: [
  ],
  providers: [
    AppInitService, { 
      provide: APP_INITIALIZER, 
      useFactory: startupServiceFactory, 
        deps: [AppInitService], 
        multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
