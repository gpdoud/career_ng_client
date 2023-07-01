import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { Opportunity } from '../opportunity.class';
import { OpportunityService } from '../opportunity.service';
import { Company } from '../../company/company.class';
import { CompanyService } from '../../company/company.service';
import { CompanyConnection } from '../../company-connection/company-connection.class';
import { CompanyConnectionService } from '../../company-connection/company-connection.service';

@Component({
  selector: 'app-opportunity-detail',
  templateUrl: '../opportunity-maint.component.html',
  styleUrls: ['../opportunity-maint.component.css']
})
export class OpportunityDetailComponent {

  pageTitle = "Opportunity Detail";
  readonly: boolean = true;
  verifyDelete: boolean = false;
  opportunity!: Opportunity;
  companies: Company[] = [];
  companyConnections: CompanyConnection[] = [];


  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private opsvc: OpportunityService,
    private cmsvc: CompanyService,
    private ccsvc: CompanyConnectionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  toggleVerifyDelete(): void { 
    this.verifyDelete = !this.verifyDelete
  }
  encrypt(): void {}
  save(): void {}

  remove(): void {
    this.opsvc.remove(this.opportunity.id).subscribe({
      next: (res) => {
        console.debug("Opportunity Removed!");
        this.router.navigateByUrl("/opportunity/list");
      },
      error: (err) => console.error(err)
    });
  }

  addCompanyName(o: Opportunity) {
    if(typeof o.company !== "undefined" && o.company !== null) {
      o.companyName = o.company.name
    }
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.opsvc.get(id).subscribe({
      next: (res) => {
        this.addCompanyName(res);
        console.debug("Opportunity", res);

        this.opportunity = res as Opportunity;
      },
      error: (err) => console.error(err)
    });
  }


}
