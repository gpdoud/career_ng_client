import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { Company } from '../../company/company.class';
import { CompanyService } from '../../company/company.service';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';
import { CompanyMasterService } from '../company-master.service';
import { CompanyMaster } from '../company-master.class';

@Component({
  selector: 'app-company-master-assign',
  templateUrl: './company-master-assign.component.html',
  styleUrls: ['./company-master-assign.component.css']
})
export class CompanyMasterAssignComponent {

  pageTitle = "Company Master Assigned to Student Company";
  cm!: CompanyMaster; 
  students!: User[];
  checkAll: boolean = false;
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private csvc: CompanyService,
    private cmsvc: CompanyMasterService,
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  assign(): void {
    for(let s of this.students) {
      if(s.selected)
      this.csvc.assign(s.id, this.cm.id).subscribe({
        next: (res) => {
          console.debug(`Assign ${this.cm.name} to ${s.firstname} ${s.lastname}`);
          s.selected = false;
        },
        error: (err) => console.error(err)
        });
    }

  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.cmsvc.get(id).subscribe({
      next: (res) => {
        console.debug("CompanyMaster", res);
        this.cm = res as CompanyMaster;
      },
      error: (err) => console.error(err)
    });
    this.usrsvc.students().subscribe({
      next: (res) => {
        console.debug("Users:Students", res);
        this.students = res as User[];
      },
      error: (err) => console.error(err)
    });
  }

}
