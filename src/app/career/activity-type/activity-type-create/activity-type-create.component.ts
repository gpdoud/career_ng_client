import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { ActivityType } from '../activity-type.class';
import { ActivityTypeService } from '../activity-type.service';

@Component({
  selector: 'app-activity-type-create',
  templateUrl: '../activity-type-maint.component.html',
  styleUrls: ['../activity-type-maint.component.css']
})
export class ActivityTypeCreateComponent {

  pageTitle = "Activity Type Create";
  readonly: boolean = false;
  activityType: ActivityType = new ActivityType();
  routerlink = "/activitytype/list";
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private cmsvc: ActivityTypeService,
    private usrsvc: UserService,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.activityType);
    this.cmsvc.create(this.activityType).subscribe({
      next: (res) => {
        console.debug("ActivityType Created!");
        this.router.navigateByUrl("/activitytype/list");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin();
  }

  verifyDelete(): void { }
  toggleVerifyDelete(): void { }
  remove(): void { }

}
