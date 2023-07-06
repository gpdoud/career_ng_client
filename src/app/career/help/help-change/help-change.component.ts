import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { Help } from '../help.class';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-help-change',
  templateUrl: '../help.maint.component.html',
  styleUrls: ['../help.maint.component.css']
})
export class HelpChangeComponent {

  pageTitle = "Help Change";
  readonly: boolean = false;
  help!: Help;
  routerlink = "/help/list";
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private hlpsvc: HelpService,
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    console.debug("B4:", this.help);
    this.hlpsvc.change(this.help).subscribe({
      next: (res) => {
        console.debug("Help Changed!");
        this.router.navigateByUrl("/help/list");
      },
      error: (err) => console.error(err)
    });
  }

  verifyDelete(): void {}
  toggleVerifyDelete(): void {}
  remove(): void {}

  ngOnInit(): void {
    this.sys.chkLogin();
    let id = this.route.snapshot.params["id"];
    this.hlpsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Help", res);
        this.help = res as Help;
      },
      error: (err) => console.error(err)
    });
  }


}
