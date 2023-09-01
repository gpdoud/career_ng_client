import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { encrypt } from 'dsi-encrypt-password';
import { SystemService } from 'src/app/misc/services/system.service';

@Component({
  selector: 'app-user-create',
  templateUrl: '../user-maint.component.html',
  styleUrls: ['../user-maint.component.css']
})
export class UserCreateComponent {
  pageTitle = "User Create";
  readonly: boolean = false;
  user: User = new User();
  password: string = "";
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private usrsvc: UserService,
    private router: Router
  ) {}

  encrypt(): void {
    this.user.password = this.usrsvc.encryptString(this.password);
  }

  save(): void {
    console.debug("B4:", this.user);
    this.encrypt();
    this.usrsvc.create(this.user).subscribe({
      next: (res) => {
        console.debug("User Created!");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => console.error(err)
    });
  }

  verifyDelete(): void {}
  toggleVerifyDelete(): void {}
  remove(): void {}
}
