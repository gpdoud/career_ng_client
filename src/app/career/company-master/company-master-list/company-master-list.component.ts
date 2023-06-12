import { Component } from '@angular/core';
import { SystemService } from 'src/app/misc/services/system.service';
import { CompanyMaster } from '../company-master.class';
import { CompanyMasterService } from '../company-master.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-customer-master-list',
  templateUrl: './company-master-list.component.html',
  styleUrls: ['./company-master-list.component.css']
})
export class CompanyMasterListComponent {
  pageTitle = "CompanyMaster List";
  createRouterLink = "/customermaster/create";
  customerMasters!: CompanyMaster[];
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private cmsvc: CompanyMasterService,
    private usrsvc: UserService
  ) {}

  searchColumn: string = ''
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
        console.debug("CompanyMasters", res);
        this.customerMasters = res as CompanyMaster[];
      },
      error: (err) => console.error(err)
    });
  }

}
