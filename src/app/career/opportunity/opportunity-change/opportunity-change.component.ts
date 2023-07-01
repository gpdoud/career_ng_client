import { Component } from '@angular/core';
import { Opportunity } from '../opportunity.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { OpportunityService } from '../opportunity.service';
import { Company } from '../../company/company.class';
import { CompanyService } from '../../company/company.service';
import { CompanyConnection } from '../../company-connection/company-connection.class';
import { CompanyConnectionService } from '../../company-connection/company-connection.service';

@Component({
  selector: 'app-opportunity-change',
  templateUrl: '../opportunity-maint.component.html',
  styleUrls: ['../opportunity-maint.component.css']
})
export class OpportunityChangeComponent {

  pageTitle = "Opportunity Change";
  readonly: boolean = false;
  opportunity!: Opportunity;
  companies!: Company[];
  companyConnections!: CompanyConnection[];
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private opsvc: OpportunityService,
    private cmsvc: CompanyService,
    private ccsvc: CompanyConnectionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    console.debug("B4:", this.opportunity);
    this.opsvc.change(this.opportunity).subscribe({
      next: (res) => {
        console.debug("Opportunity Changed!");
        this.router.navigateByUrl("/opportunity/list");
      },
      error: (err) => console.error(err)
    });
  }

  verifyDelete(): void {}
  toggleVerifyDelete(): void {}
  remove(): void {}

  ngOnInit(): void {
    this.sys.chkLogin();
    // get the companies list
    let userId = 0;
    if(typeof this.sys.loggedInUser !== "undefined" && this.sys.loggedInUser !== null) {
      userId = this.sys.loggedInUser.id;
    }
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
    // get the company connections list
    this.ccsvc.list().subscribe({
      next: (res) => {
        console.debug("CompanyConnections:", res);
        this.companyConnections = res as CompanyConnection[];
      },
      error: (err) => console.error(err)
    });
    // get the opportunity
    let id = this.route.snapshot.params["id"];
    this.opsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Opportunity:", res);
        this.opportunity = res as Opportunity;
      },
      error: (err) => console.error(err)
    });
  }

}
