import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { Opportunity } from '../opportunity.class';
import { OpportunityService } from '../opportunity.service';
import { Company } from '../../company/company.class';
import { CompanyService } from '../../company/company.service';
import { CompanyConnection } from '../../company-connection/company-connection.class';
import { CompanyConnectionService } from '../../company-connection/company-connection.service';

@Component({
  selector: 'app-opportunity-create',
  templateUrl: '../opportunity-maint.component.html',
  styleUrls: ['../opportunity-maint.component.css']
})
export class OpportunityCreateComponent {

  pageTitle = "Opportunity Create";
  readonly: boolean = false;
  opportunity: Opportunity = new Opportunity();
  companies!: Company[];
  companyConnections!: CompanyConnection[];

  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private opsvc: OpportunityService,
    private cmsvc: CompanyService,
    private ccsvc: CompanyConnectionService,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.opportunity);
    this.opsvc.create(this.opportunity).subscribe({
      next: (res) => {
        console.debug("Opportunity Created!");
        this.router.navigateByUrl("/opportunity/list");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    let userId = 0;
    if(typeof this.sys.loggedInUser !== "undefined" && this.sys.loggedInUser !== null) {
      this.opportunity.userId = this.sys.loggedInUser.id;
      userId = this.sys.loggedInUser.id;
    }
    this.ccsvc.list().subscribe({
      next: (res) => {
        console.debug("CompanyConnections:", res);
        this.companyConnections = res as CompanyConnection[];
      },
      error: (err) => console.error(err)
    });
    // get the all companies for admin
    // but only student companies for students
    let observable = this.sys.isAdmin
        ? this.cmsvc.list()
        : this.cmsvc.listByStudent(userId);
    observable.subscribe({
      next: (res) => {
        console.debug("Companies:", res);
        this.companies = res as Company[];
      },
      error: (err) => console.error(err)
    });

  }

  verifyDelete(): void { }
  toggleVerifyDelete(): void { }
  remove(): void { }


}
