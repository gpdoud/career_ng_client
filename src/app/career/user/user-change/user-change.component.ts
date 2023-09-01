import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { encrypt } from 'dsi-encrypt-password';
import { SystemService } from 'src/app/misc/services/system.service';

@Component({
  selector: 'app-user-change',
  templateUrl: '../user-maint.component.html',
  styleUrls: ['../user-maint.component.css']
})
export class UserChangeComponent {
  pageTitle = "User Change";
  readonly: boolean = false;
  user!: User;
  password: string = "";
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  encrypt(): void {
    this.user.password = this.usrsvc.encryptString(this.password);
  }

  save(): void {
    console.debug("B4:", this.user);
    this.encrypt();
    this.usrsvc.change(this.user).subscribe({
      next: (res) => {
        console.debug("User Changed!");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => console.error(err)
    });
  }

  verifyDelete(): void {}
  toggleVerifyDelete(): void {}
  remove(): void {}

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.usrsvc.get(id).subscribe({
      next: (res) => {
        console.debug("User", res);
        this.user = res as User;
        this.password = this.user.password;
      },
      error: (err) => console.error(err)
    });
  }
}
