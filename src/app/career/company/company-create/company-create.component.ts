import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { Company } from '../company.class';
import { CompanyService } from '../company.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-company-create',
  templateUrl: '../company-maint.component.html',
  styleUrls: ['../company-maint.component.css']
})
export class CompanyCreateComponent {

  pageTitle = "Company Create";
  readonly: boolean = false;
  company: Company = new Company();
  users!: User[];

  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private csvc: CompanyService,
    private usrsvc: UserService,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.company);
    this.csvc.create(this.company).subscribe({
      next: (res) => {
        console.debug("Company Created!");
        this.router.navigateByUrl("/company/list");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    if(this.sys.loggedInUser !== null) {
      this.company.userId = this.sys.loggedInUser.id;
    }
    this.usrsvc.list().subscribe({
      next: (res) => {
        console.debug("Users", res);
        this.users = res as User[];
      },
      error: (err) => console.error(err)
    });

  }

  verifyDelete(): void { }
  toggleVerifyDelete(): void { }
  remove(): void { }

}
