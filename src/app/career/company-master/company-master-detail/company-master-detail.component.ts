import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { CompanyMaster } from '../company-master.class';
import { CompanyMasterService } from '../company-master.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-customer-master-detail',
  templateUrl: '../company-master-maint.component.html',
  styleUrls: ['../company-master-maint.component.css']
})
export class CompanyMasterDetailComponent {
  pageTitle = "CompanyMaster Detail";
  readonly: boolean = true;
  verifyDelete: boolean = false;
  companyMaster!: CompanyMaster;
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private cmsvc: CompanyMasterService,
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
    this.cmsvc.remove(this.companyMaster.id).subscribe({
      next: (res) => {
        console.debug("CompanyMaster Removed!");
        this.router.navigateByUrl("/companymaster/list");
      },
      error: (err) => console.error(err)
    });
  }

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
