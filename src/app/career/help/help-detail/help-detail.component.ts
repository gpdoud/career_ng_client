import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { Help } from '../help.class';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-help-detail',
  templateUrl: '../help.maint.component.html',
  styleUrls: ['../help.maint.component.css']
})
export class HelpDetailComponent {

  pageTitle = "Help Detail";
  readonly: boolean = true;
  verifyDelete: boolean = false;
  help!: Help;
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private hlpsvc: HelpService,
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
    this.hlpsvc.remove(this.help.id).subscribe({
      next: (res) => {
        console.debug("Help Removed!");
        this.router.navigateByUrl("/help/list");
      },
      error: (err) => console.error(err)
    });
  }

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
