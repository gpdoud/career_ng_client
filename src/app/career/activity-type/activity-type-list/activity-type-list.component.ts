import { Component } from '@angular/core';
import { SystemService } from 'src/app/misc/services/system.service';
import { ActivityType } from '../activity-type.class';
import { ActivityTypeService } from '../activity-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-type-list',
  templateUrl: './activity-type-list.component.html',
  styleUrls: ['./activity-type-list.component.css']
})
export class ActivityTypeListComponent {


  pageTitle = "Activity Type List";
  createRouterLink = "/activitytype/create";
  activityTypes!: ActivityType[];
  showRemoveVerify: boolean = false;
  activityTypeId: number = 0;

  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private router: Router,
    private atsvc: ActivityTypeService
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

  change(at: ActivityType): void {
    this.router.navigateByUrl(`/activitytype/change/${at.id}`);
  }
  remove(id: number): void {
    this.showRemoveVerify = !this.showRemoveVerify;
    this.activityTypeId = id;
  }
  verifyRemove(id: number): void {
    this.atsvc.remove(id).subscribe({
      next: (res) => {
        console.debug("ActivityType Removed!");
        this.activityTypes = res as ActivityType[];
      },
      error: (err) => console.error(err)
    });
  }

  refresh(): void {
    this.sys.chkLogin();
    this.atsvc.list().subscribe({
      next: (res) => {
        console.debug("ActivityTypes", res);
        this.activityTypes = res as ActivityType[];
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.refresh();
  }

}
