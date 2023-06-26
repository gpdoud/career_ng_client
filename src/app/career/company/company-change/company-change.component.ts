import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { Company } from '../company.class';
import { CompanyService } from '../company.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-company-change',
  templateUrl: '../company-maint.component.html',
  styleUrls: ['../company-maint.component.css']
})
export class CompanyChangeComponent {

  pageTitle = "Company Change";
  readonly: boolean = false;
  company!: Company;
  users!: User[];

  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private csvc: CompanyService,
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    console.debug("B4:", this.company);
    this.csvc.change(this.company).subscribe({
      next: (res) => {
        console.debug("Company Changed!");
        this.router.navigateByUrl("/company/list");
      },
      error: (err) => console.error(err)
    });
  }

  verifyDelete(): void {}
  toggleVerifyDelete(): void {}
  remove(): void {}

  ngOnInit(): void {
    this.usrsvc.list().subscribe({
      next: (res) => {
        console.debug("Users", res);
        this.users = res as User[];
      },
      error: (err) => console.error(err)
    });

    let id = this.route.snapshot.params["id"];
    this.csvc.get(id).subscribe({
      next: (res) => {
        console.debug("Company", res);
        this.company = res as Company;
      },
      error: (err) => console.error(err)
    });
  }

}
