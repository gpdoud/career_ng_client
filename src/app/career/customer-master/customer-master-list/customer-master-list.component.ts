import { Component } from '@angular/core';
import { SystemService } from 'src/app/misc/services/system.service';
import { CustomerMaster } from '../customer-master.class';
import { CustomerMasterService } from '../customer-master.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-customer-master-list',
  templateUrl: './customer-master-list.component.html',
  styleUrls: ['./customer-master-list.component.css']
})
export class CustomerMasterListComponent {
  pageTitle = "CustomerMaster List";
  createRouterLink = "/CustomerMaster/create";
  customerMasters!: CustomerMaster[];
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private cmsvc: CustomerMasterService,
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
        console.debug("CustomerMasters", res);
        this.customerMasters = res as CustomerMaster[];
      },
      error: (err) => console.error(err)
    });
  }

}
