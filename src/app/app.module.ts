import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppInitService } from './app-init.service';
import * as x from './career/index.exports';
import { RouterModule } from '@angular/router';
import { UserSearchPipe } from './career/user/user-search.pipe';
import { SortPipe } from './misc/pipes/sort.pipe';
import { HeaderComponent } from './misc/components/header/header.component';
import { FooterComponent } from './misc/components/footer/footer.component';
import { PageTitleComponent } from './misc/components/page-title/page-title.component';

export const startupServiceFactory = (appinit: AppInitService) => {
  return () => appinit.getSettings();
}

@NgModule({
  declarations: [
    x.UserLoginComponent,x.UserListComponent,x.UserDetailComponent,x.UserCreateComponent,x.UserChangeComponent,
    x.E404Component, x.BoolDisplayPipe,x.MenuComponent,
    AppComponent,
    UserSearchPipe,
    SortPipe,
    HeaderComponent,
    FooterComponent,
    PageTitleComponent
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
