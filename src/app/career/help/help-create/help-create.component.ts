import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { Help } from '../help.class';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-help-create',
  templateUrl: '../help.maint.component.html',
  styleUrls: ['../help.maint.component.css']
})
export class HelpCreateComponent {

  pageTitle = "Help Create";
  readonly: boolean = false;
  help: Help = new Help();
  routerlink = "/help/list";
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private hlpsvc: HelpService,
    private usrsvc: UserService,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.help);
    this.hlpsvc.create(this.help).subscribe({
      next: (res) => {
        console.debug("Help Created!");
        this.router.navigateByUrl("/help/list");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin();
  }

  verifyDelete(): void { }
  toggleVerifyDelete(): void { }
  remove(): void { }


}
