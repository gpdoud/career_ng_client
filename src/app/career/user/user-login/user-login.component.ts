import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { encrypt } from 'dsi-encrypt-password';
import { SystemService } from 'src/app/misc/services/system.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  email: string = '';
  password: string = '';
  encryptedPassword: string = '';
  message: string = '';

  get passwordEncrypted() { return encrypt(this.password); }

  constructor(
    private sys: SystemService,
    private usrsvc: UserService,
    private router: Router
  ) {}

  encrypt(): void {
    this.encryptedPassword = this.usrsvc.encryptString(this.password);
    this.password = "******************";
  }

  login(): void {
    this.sys.loggedInUser = null;
    this.message = '';
    this.encrypt();
    this.usrsvc.login(this.email, this.encryptedPassword).subscribe({
      next: (res) => {
        console.debug("Login successful!");
        this.sys.loggedInUser = res;
        this.router.navigateByUrl("/user/list");
      },
      error: (err) =>  {
        if(err.status === 404) {
          this.message = "404 - Not Found";
        } else {
          console.error(err); 
        }
      }
    });
  }

}
