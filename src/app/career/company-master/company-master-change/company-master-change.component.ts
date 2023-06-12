import { Component } from '@angular/core';
import { CompanyMaster } from '../company-master.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { CompanyMasterService } from '../company-master.service';

@Component({
  selector: 'app-customer-master-change',
  templateUrl: '../company-master-maint.component.html',
  styleUrls: ['../company-master-maint.component.css']
})
export class CompanyMasterChangeComponent {
  pageTitle = "Company Master Change";
  readonly: boolean = false;
  companyMaster!: CompanyMaster;
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private cmsvc: CompanyMasterService,
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    console.debug("B4:", this.companyMaster);
    this.cmsvc.change(this.companyMaster).subscribe({
      next: (res) => {
        console.debug("Company Master Changed!");
        this.router.navigateByUrl("/customermaster/list");
      },
      error: (err) => console.error(err)
    });
  }

  verifyDelete(): void {}
  toggleVerifyDelete(): void {}
  remove(): void {}

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.cmsvc.get(id).subscribe({
      next: (res) => {
        console.debug("CompanyMaster", res);
        this.companyMaster = res as CompanyMaster;
      },
      error: (err) => console.error(err)
    });
  }

}
