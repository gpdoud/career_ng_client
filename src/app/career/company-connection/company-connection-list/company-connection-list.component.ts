import { Component } from '@angular/core';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { CompanyConnection } from '../company-connection.class';
import { CompanyConnectionService } from '../company-connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-connection-maint',
  templateUrl: './company-connection-list.component.html',
  styleUrls: ['./company-connection-list.component.css']
})
export class CompanyConnectionListComponent {

  pageTitle = "CompanyConnection List";
  createRouterLink = "/companyconnection/create";
  companyConnections!: CompanyConnection[];
  get userIsAdmin() { return this.sys.isAdmin; }
  showVerifyRemove: boolean = false;
  idToDelete: number = 0;

  constructor(
    private sys: SystemService,
    private ccsvc: CompanyConnectionService,
    private usrsvc: UserService,
    private router: Router
  ) { }

  searchCriteria: string = ''
  sortColumn: string = 'id'
  sortAsc: boolean = true;
  sortCol(col: string): void {
    if (this.sortColumn === col) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = col;
    this.sortAsc = true;
  }

  change(id: number): void {
    this.router.navigateByUrl(`/companyconnection/change/${id}`);
   }
  remove(id: number): void {
    this.idToDelete = id;
    this.showVerifyRemove = !this.showVerifyRemove;
  }
  verifyRemove(id: number): void {
    this.ccsvc.remove(id).subscribe({
      next: (res) => {
        console.debug("CompanyConnection Removed!");
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }

  refresh(): void {
    this.ccsvc.list().subscribe({
      next: (res) => {
        console.debug("CompanyConnections", res);
        this.companyConnections = res as CompanyConnection[];
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.refresh();
  }

}
