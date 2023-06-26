import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { Company } from '../company.class';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: '../company-maint.component.html',
  styleUrls: ['../company-maint.component.css']
})
export class CompanyDetailComponent {

  pageTitle = "Company Detail";
  readonly: boolean = true;
  verifyDelete: boolean = false;
  company!: Company;
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private csvc: CompanyService,
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  toggleVerifyDelete(): void { 
    this.verifyDelete = !this.verifyDelete
  }
  encrypt(): void {}
  save(): void {}

  remove(): void {
    this.csvc.remove(this.company.id).subscribe({
      next: (res) => {
        console.debug("Company Removed!");
        this.router.navigateByUrl("/company/list");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
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
