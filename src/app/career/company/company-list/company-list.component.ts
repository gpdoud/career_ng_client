import { Component } from '@angular/core';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { Company } from '../company.class';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {

  pageTitle = "Company List";
  createRouterLink = "/company/create";
  companies!: Company[];
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private cmsvc: CompanyService,
    private usrsvc: UserService
  ) {}

  searchCriteria: string = ''
  sortColumn: string = 'id'
  sortAsc: boolean = true;
  sortCol(col: string): void {
    if(this.sortColumn === col) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = col;
    this.sortAsc = true;
  }

  addUserLastname(companies: Company[]) {
    for(let c of companies) {
      c.userLastname = (c.user !== null) 
        ? c.user.lastname : "";
    }
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    if(this.sys.loggedInUser === null) return;
    let observable!: Observable<Company[]>;
    if(this.userIsAdmin) {
      observable = this.cmsvc.list();
    } else {
      let userId = this.sys.loggedInUser.id;
      observable = this.cmsvc.listByStudent(userId);
    }
    observable.subscribe({
      next: (res) => {
        this.addUserLastname(res);
        console.debug("Company", res);
        this.companies = res as Company[];
      },
      error: (err) => console.error(err)
    });
  }

}
