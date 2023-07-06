import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { CompanyConnection } from '../../company-connection/company-connection.class';
import { CompanyConnectionService } from '../../company-connection/company-connection.service';
import { Company } from '../../company/company.class';
import { CompanyService } from '../../company/company.service';
import { Opportunity } from '../opportunity.class';
import { OpportunityService } from '../opportunity.service';
import { ActivityService } from '../../activity/activity.service';

@Component({
  selector: 'app-opportunity-activity',
  templateUrl: './opportunity-activity.component.html',
  styleUrls: ['./opportunity-activity.component.css']
})
export class OpportunityActivityComponent {

  pageTitle = "Opportunity Activity";
  readonly: boolean = true;
  verifyDelete: boolean = false;
  opportunity!: Opportunity;

  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private opsvc: OpportunityService,
    private asvc: ActivityService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  change(activityId: number): void {
    this.router.navigateByUrl(`/activity/change/${activityId}`);
  }
  showVerify: boolean = false;
  idToDelete: number = -1;
  remove(id: number): void {
    this.showVerify = !this.showVerify;
    this.idToDelete = id;
  }
  verifyRemove(id: number): void {
    this.asvc.remove(id).subscribe({
      next: (res) => {
        console.debug("Activity Removed!");
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }

  fillRelatedData(o: Opportunity) {
    if(typeof o.user !== "undefined" && o.user !== null) {
      o.username = o.user.lastname;
    }
    if(typeof o.company !== "undefined" && o.company !== null) {
      o.companyName = o.company.name
    }
    if(typeof o.activities !== null && o.activities.length > 0) {
      for(let at of o.activities) {
        if(typeof at.activityType !== "undefined" && at.activityType !== null) {
          at.activityTypeName = at.activityType.type;
        }
        let yyyy = at.date.substring(0,4);
        let mm = at.date.substring(5,7);
        let dd = at.date.substring(8,10);
        at.dateMDY = `${mm}/${dd}/${yyyy}`;
      }
    }
  }

  refresh(): void {
    let id = this.route.snapshot.params["id"];
    this.opsvc.get(id).subscribe({
      next: (res) => {
        this.fillRelatedData(res);
        console.debug("Opportunity", res);
        
        this.opportunity = res as Opportunity;
      },
      error: (err) => console.error(err)
    });
  }
  
  ngOnInit(): void {
    this.sys.chkLogin();
    this.refresh();
  }


}
