import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppInitService } from 'src/app/app-init.service';
import { User } from 'src/app/career/user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  productName = "Career Management System";
  author = "Annette Ballard & Greg Doud";
  major: number = 1;
  minor: number = 0;
  patch: number = 0;
  releaseDate = "August 4, 2023"
  state: string = "PROD";

  get version() { 
    let ver =  `${this.major}.${this.minor}`;
    if(this.patch !== 0) {
      ver += `.${this.patch}`;
    }
    return ver;
  }

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
    // console.warn("chkLogin disabled!");
    // return;
    if(this.loggedInUser === null) {
      this.router.navigateByUrl("/login");
    }
  }
}
