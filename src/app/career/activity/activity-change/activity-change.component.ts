import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { Activity } from '../activity.class';
import { ActivityService } from '../activity.service';
import { ActivityType } from '../../activity-type/activity-type.class';
import { ActivityTypeService } from '../../activity-type/activity-type.service';

@Component({
  selector: 'app-activity-change',
  templateUrl: '../activity-maint.component.html',
  styleUrls: ['../activity-maint.component.css']
})
export class ActivityChangeComponent {

  pageTitle = "Company Master Change";
  readonly: boolean = false;
  activity!: Activity;
  activityTypes: ActivityType[] = [];
  routerlink = "/activity/list";
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private asvc: ActivityService,
    private atsvc: ActivityTypeService,
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    console.debug("B4:", this.activity);
    this.asvc.change(this.activity).subscribe({
      next: (res) => {
        console.debug("Activity Changed!");
        this.router.navigateByUrl(`/opportunity/activity/${this.activity.opportunityId}`);
      },
      error: (err) => console.error(err)
    });
  }

  verifyDelete(): void {}
  toggleVerifyDelete(): void {}
  remove(): void {}

  ngOnInit(): void {
    this.sys.chkLogin();
    this.atsvc.list().subscribe({
      next: (res) => {
        console.debug("ActivityTypes:", res);
        this.activityTypes = res;
      },
      error: (err) => console.error(err)
    });
    this.sys.chkLogin();
    let id = this.route.snapshot.params["id"];
    this.asvc.get(id).subscribe({
      next: (res) => {
        console.debug("Activity", res);
        res.date = res.date.substring(0,10);
        this.activity = res as Activity;
      },
      error: (err) => console.error(err)
    });
  }

}
