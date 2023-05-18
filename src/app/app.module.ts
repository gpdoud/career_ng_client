import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { AppInitService } from './app-init.service';
import { E404Component } from './misc/e404/e404.component';

export const startupServiceFactory = (appinit: AppInitService) => {
  return () => appinit.getSettings();
}

@NgModule({
  declarations: [
    AppComponent,
    E404Component,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    UserModule,
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
