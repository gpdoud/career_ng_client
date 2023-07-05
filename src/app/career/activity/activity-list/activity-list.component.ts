import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { Activity } from '../activity.class';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent {

  pageTitle = "Activity List";
  createRouterLink = "/activity/create";
  activities!: Activity[];
  showRemoveVerify: boolean = false;
  activityTypeId: number = 0;

  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private router: Router,
    private asvc: ActivityService
  ) {}

  searchCriteria: string = ''
  sortColumn: string = 'type'
  sortAsc: boolean = true;
  sortCol(col: string): void {
    if(this.sortColumn === col) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = col;
    this.sortAsc = true;
  }

  change(at: Activity): void {
    this.router.navigateByUrl(`/activity/change/${at.id}`);
  }
  remove(id: number): void {
    this.showRemoveVerify = !this.showRemoveVerify;
    this.activityTypeId = id;
  }
  verifyRemove(id: number): void {
    this.asvc.remove(id).subscribe({
      next: (res) => {
        console.debug("Activity Removed!");
        this.activities = res as Activity[];
      },
      error: (err) => console.error(err)
    });
  }

  fillRelatedData(activities: Activity[]): void {
    for(let a of activities) {
      if(a.activityType !== null) {
        a.activityTypeName = a.activityType.type;
        let yyyy = a.date.substring(0,4);
        let mm = a.date.substring(5,7);
        let dd = a.date.substring(8,10);
        a.date = `${mm}/${dd}/${yyyy}`;
      }
    }
  }

  refresh(): void {
    this.sys.chkLogin();
    this.asvc.list().subscribe({
      next: (res) => {
        this.fillRelatedData(res);
        console.debug("Activity", res);
        this.activities = res as Activity[];
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.refresh();
  }


}
