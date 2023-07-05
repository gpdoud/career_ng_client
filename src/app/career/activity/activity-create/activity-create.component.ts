import { Component } from '@angular/core';
import { Activity } from '../activity.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { ActivityService } from '../activity.service';
import { ActivityType } from '../../activity-type/activity-type.class';
import { ActivityTypeService } from '../../activity-type/activity-type.service';

@Component({
  selector: 'app-activity-create',
  templateUrl: '../activity-maint.component.html',
  styleUrls: ['../activity-maint.component.css']
})
export class ActivityCreateComponent {

  pageTitle = "Activity Create";
  readonly: boolean = false;
  activity: Activity = new Activity();
  activityTypes: ActivityType[] = [];
  routerlink = "/activity/list";
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private cmsvc: ActivityService,
    private atsvc: ActivityTypeService,
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.activity);
    this.activity.activityTypeId = +this.activity.activityTypeId;
    this.cmsvc.create(this.activity).subscribe({
      next: (res) => {
        console.debug("Activity Created!");
        this.router.navigateByUrl(`/opportunity/activity/${this.activity.opportunityId}`);
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.activity.opportunityId = +this.route.snapshot.params["oppid"];
    this.atsvc.list().subscribe({
      next: (res) => {
        console.debug("ActivityTypes:", res);
        this.activityTypes = res;
      },
      error: (err) => console.error(err)
    });
    this.sys.chkLogin();
  }

  verifyDelete(): void { }
  toggleVerifyDelete(): void { }
  remove(): void { }

}
