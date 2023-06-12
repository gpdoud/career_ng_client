import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { CompanyMaster } from '../company-master.class';
import { CompanyMasterService } from '../company-master.service';

@Component({
  selector: 'app-customer-master-create',
  templateUrl: '../company-master-maint.component.html',
  styleUrls: ['../company-master-maint.component.css']
})
export class CompanyMasterCreateComponent {
  pageTitle = "CompanyMaster Create";
  readonly: boolean = false;
  companyMaster: CompanyMaster = new CompanyMaster();
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private cmsvc: CompanyMasterService,
    private usrsvc: UserService,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.companyMaster);
    this.cmsvc.create(this.companyMaster).subscribe({
      next: (res) => {
        console.debug("CompanyMaster Created!");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => console.error(err)
    });
  }

  verifyDelete(): void { }
  toggleVerifyDelete(): void { }
  remove(): void { }
}
