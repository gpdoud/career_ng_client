import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppInitService } from 'src/app/app-init.service';
import { User } from 'src/app/career/user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  get config() { return this.init.config; };

  loggedInUser: User | null = null;
  
  constructor(
    private init: AppInitService,
    private router: Router
  ) {}

  get isAdmin(): boolean {
    if(this.loggedInUser === null) {
      return false;
    }
    return this.loggedInUser.admin;
  }

  chkLogin(): void {
    if(this.loggedInUser === null) {
      this.router.navigateByUrl("/login");
    }
  }
}
