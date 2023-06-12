import { Component } from '@angular/core';
import { Menu } from './menu.class';
import { SystemService } from '../services/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menus: Menu[] = [
    new Menu("User", "/user/list"),
    new Menu("Customer Master", "/customermaster/list"),
    new Menu("Help", "/help"),
    new Menu("Login", "/login")
  ];
  userDisplay: string = '[]';

  constructor(
    private sys: SystemService
  ) {}

  ngOnInit(): void {
    if(this.sys.loggedInUser === null) {
      this.userDisplay = '[Login]';
    } else {
      this.userDisplay = `[${this.sys.loggedInUser.lastname}]`;
      if(this.sys.isAdmin) {
        this.userDisplay = `${this.userDisplay}(A)`;
      }
    }
  }
  
}
