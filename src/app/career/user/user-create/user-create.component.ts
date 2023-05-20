import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { encrypt } from 'dsi-encrypt-password';

@Component({
  selector: 'app-user-create',
  templateUrl: '../user-maint.component.html',
  styleUrls: ['../user-maint.component.css']
})
export class UserCreateComponent {
  readonly: boolean = false;
  user: User = new User();


  constructor(
    private usrsvc: UserService,
    private router: Router
  ) {}

  encrypt(): void {
    this.user.password = this.usrsvc.encryptString(this.user.password);
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
