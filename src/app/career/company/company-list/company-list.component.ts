import { Component } from '@angular/core';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { Company } from '../company.class';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs';
import { CompanyMasterService } from '../../company-master/company-master.service';

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
    private csvc: CompanyService,
    private cmsvc: CompanyMasterService,
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

  addToCompanyMaster(company: Company): void {
    this.cmsvc.addCompany(company).subscribe({
      next: (res) => {
        console.debug("Company added to CompanyMaster successfully!");
        alert("Company added to CompanyMaster successfully!");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    if(this.sys.loggedInUser === null) return;
    let observable!: Observable<Company[]>;
    if(this.userIsAdmin) {
      observable = this.csvc.list();
    } else {
      let userId = this.sys.loggedInUser.id;
      observable = this.csvc.listByStudent(userId);
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
