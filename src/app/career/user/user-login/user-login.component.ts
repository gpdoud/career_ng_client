import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { encrypt } from 'dsi-encrypt-password';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  email: string = '';
  password: string = '';
  encryptedPassword: string = '';
  message: string = 'Not found';

  get passwordEncrypted() { return encrypt(this.password); }

  constructor(
    private usrsvc: UserService,
    private router: Router
  ) {}

  encrypt(): void {
    this.encryptedPassword = encrypt(this.password);
    this.password = "******************";
  }

  login(): void {
    this.usrsvc.login(this.email, this.encryptedPassword).subscribe({
      next: (res) => {
        console.debug("Login successful!");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => console.error(err)
    });
  }

}
