import { Component, SimpleChanges } from '@angular/core';
import { OpportunityService } from '../opportunity.service';
import { SystemService } from 'src/app/misc/services/system.service';
import { Opportunity } from '../opportunity.class';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-opportunity-list',
  templateUrl: './opportunity-list.component.html',
  styleUrls: ['./opportunity-list.component.css']
})
export class OpportunityListComponent {

  pageTitle = "Opportunity List";
  createRouterLink = "/opportunity/create";
  opportunites!: Opportunity[];
  showInactive: boolean = false;
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private opsvc: OpportunityService
  ) { }

  onCheckboxChange(event) {
    this.refresh();
  }

  searchCriteria: string = ''
  sortColumn: string = 'username'
  sortAsc: boolean = true;
  sortCol(col: string): void {
    if (this.sortColumn === col) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = col;
    this.sortAsc = true;
  }

  addNames(opportunities: Opportunity[]) {
    for (let o of opportunities) {
      if (typeof o.company !== "undefined" && o.company !== null) {
        o.companyName = o.company.name;
      }
      if(typeof o.companyConnection !== "undefined" && o.companyConnection !== null) {
        o.companyConnectionName = o.companyConnection.connection;
      }
      if (typeof o.user !== "undefined" && o.user !== null) {
        o.username = o.user.lastname;
      }

    }
  }

  filterInactives(opportunities: Opportunity[]): Opportunity[] {
    if(this.showInactive) {
      return opportunities;
    }
    let selected: Opportunity[] = [];
    for(let o of opportunities) {
      if(!o.active) {
        continue;
      }
      selected.push(o);
    }
    return selected;
  }

  refresh(): void {
    let userId: number = 0;
    if (typeof this.sys.loggedInUser !== "undefined" && this.sys.loggedInUser !== null) {
      userId = this.sys.loggedInUser.id;
    }
    let observable = this.sys.isAdmin 
    ? this.opsvc.list() 
    : this.opsvc.studentList(userId);
    observable.subscribe({
      next: (res) => {
        res = this.filterInactives(res);
        this.addNames(res);
        console.debug("Opportunites", res);
        this.opportunites = res as Opportunity[];
      },
      error: (err) => console.error(err)
    });
  }
  
  ngOnInit(): void {
    this.sys.chkLogin();
    this.refresh();
  }

}
