import { Component } from '@angular/core';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { CompanyConnection } from '../company-connection.class';
import { CompanyConnectionService } from '../company-connection.service';

@Component({
  selector: 'app-company-connection-maint',
  templateUrl: './company-connection-maint.component.html',
  styleUrls: ['./company-connection-maint.component.css']
})
export class CompanyConnectionMaintComponent {

  pageTitle = "CompanyConnection List";
  createRouterLink = "/companymaster/create";
  companyMasters!: CompanyConnection[];
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private cmsvc: CompanyConnectionService,
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

  ngOnInit(): void {
    this.sys.chkLogin();
    this.cmsvc.list().subscribe({
      next: (res) => {
        console.debug("CompanyConnections", res);
        this.companyMasters = res as CompanyConnection[];
      },
      error: (err) => console.error(err)
    });
  }

}
