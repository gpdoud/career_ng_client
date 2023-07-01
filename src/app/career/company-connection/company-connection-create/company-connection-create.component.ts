import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { CompanyConnection } from '../company-connection.class';
import { CompanyConnectionService } from '../company-connection.service';

@Component({
  selector: 'app-company-connection-create',
  templateUrl: '../company-connection-maint.component.html',
  styleUrls: ['../company-connection-maint.component.css']
})
export class CompanyConnectionCreateComponent {

  pageTitle = "CompanyConnection Create";
  readonly: boolean = false;
  companyConnection: CompanyConnection = new CompanyConnection();
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private ccsvc: CompanyConnectionService,
    private usrsvc: UserService,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.companyConnection);
    this.ccsvc.create(this.companyConnection).subscribe({
      next: (res) => {
        console.debug("Company Connection Created!");
        this.router.navigateByUrl("/companyconnection/list");
      },
      error: (err) => console.error(err)
    });
  }

  verifyDelete(): void { }
  toggleVerifyDelete(): void { }
  remove(): void { }

}
