import { Component } from '@angular/core';
import { User } from '../../user/user.class';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';
import { Opportunity } from '../../opportunity/opportunity.class';
import { OpportunityService } from '../../opportunity/opportunity.service';

@Component({
  selector: 'app-report-opportunities-by-user',
  templateUrl: './report-opportunities-by-user.component.html',
  styleUrls: ['./report-opportunities-by-user.component.css']
})
export class ReportOpportunitiesByUserComponent {
  
  pageTitle = "Report Opportunities by User";
  searchCriteria = "";

  users: User[] = [];
  opps: Opportunity[]= [];
  userId: number = 0;

  constructor(
    private sys: SystemService,
    private oppsys: OpportunityService,
    private usrsvc: UserService,
    private router: Router
  ){}

  generate(): void {
    this.oppsys.studentList(this.userId).subscribe({
      next: (res) => {
        console.debug("Opportunities:", res);
        this.opps = res;
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.usrsvc.list().subscribe({
      next: (res) => {
        console.debug("Users:", res);
        this.users = res;
      },
      error: (err) => console.error(err)
    });

  }
}
