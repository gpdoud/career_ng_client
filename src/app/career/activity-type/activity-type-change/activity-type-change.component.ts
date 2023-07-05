import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { ActivityType } from '../activity-type.class';
import { ActivityTypeService } from '../activity-type.service';

@Component({
  selector: 'app-activity-type-change',
  templateUrl: '../activity-type-maint.component.html',
  styleUrls: ['../activity-type-maint.component.css']
})
export class ActivityTypeChangeComponent {

  pageTitle = "Company Master Change";
  readonly: boolean = false;
  activityType!: ActivityType;
  routerlink = "/activitytype/list";
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private atsvc: ActivityTypeService,
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    console.debug("B4:", this.activityType);
    this.atsvc.change(this.activityType).subscribe({
      next: (res) => {
        console.debug("Activity Type Changed!");
        this.router.navigateByUrl("/activitytype/list");
      },
      error: (err) => console.error(err)
    });
  }

  verifyDelete(): void {}
  toggleVerifyDelete(): void {}
  remove(): void {}

  ngOnInit(): void {
    this.sys.chkLogin();
    let id = this.route.snapshot.params["id"];
    this.atsvc.get(id).subscribe({
      next: (res) => {
        console.debug("ActivityType", res);
        this.activityType = res as ActivityType;
      },
      error: (err) => console.error(err)
    });
  }

}
