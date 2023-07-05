import { Component } from '@angular/core';
import { Menu } from './menu.class';
import { SystemService } from '../services/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menus: Menu[] = [];
  studentMenus: Menu[] = [
    new Menu("Opportunity", "/opportunity/list"),
    new Menu("Company", "/company/list"),
    new Menu("Help", "/help"),
    new Menu("Revisions", "/revision"),
    new Menu("Login", "/login")
  ];
  adminMenus: Menu[] = [
    new Menu("Comp Master", "/companymaster/list"),
    new Menu("Comp Connect", "/companyconnection/list"),
    new Menu("Act Type", "/activitytype/list"),
    new Menu("User", "/user/list"),
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
        this.menus = this.menus.concat(this.adminMenus);
      }
    }
    this.menus = this.menus.concat(this.studentMenus);
  }
  
}
