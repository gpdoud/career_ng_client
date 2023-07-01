import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { CompanyConnection } from '../company-connection.class';
import { CompanyConnectionService } from '../company-connection.service';

@Component({
  selector: 'app-company-connection-change',
  templateUrl: '../company-connection-maint.component.html',
  styleUrls: ['../company-connection-maint.component.css']

})
export class CompanyConnectionChangeComponent {

  pageTitle = "Company Master Change";
  readonly: boolean = false;
  companyConnection!: CompanyConnection;
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private ccsvc: CompanyConnectionService,
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    console.debug("B4:", this.companyConnection);
    this.ccsvc.change(this.companyConnection).subscribe({
      next: (res) => {
        console.debug("Company Connection Changed!");
        this.router.navigateByUrl("/companyconnection/list");
      },
      error: (err) => console.error(err)
    });
  }

  verifyDelete(): void {}
  toggleVerifyDelete(): void {}
  remove(): void {}

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.ccsvc.get(id).subscribe({
      next: (res) => {
        console.debug("CompanyConnection", res);
        this.companyConnection = res as CompanyConnection;
      },
      error: (err) => console.error(err)
    });
  }
  
}
