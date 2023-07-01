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

  email: string = 'gdoud@maxtrain.com';
  password: string = 'maxpass';
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
    this.password = "";
  }

  login(): void {
    this.sys.loggedInUser = null;
    this.message = '';
    this.encrypt();
    this.usrsvc.login(this.email, this.encryptedPassword).subscribe({
      next: (res) => {
        console.debug("Login successful!");
        this.sys.loggedInUser = res;
        if(this.sys.isAdmin) {
          this.router.navigateByUrl("/opportunity/list");
        } else {
          this.router.navigateByUrl("/opportunity/list");
        }
      },
      error: (err) =>  {
        if(err.status === 404) {
          this.message = "User Not Found or not active!";
        } else {
          console.error(err); 
        }
      }
    });
  }

  ngOnInit(): void {
    console.warn("WARNING: Preload admin login information!!!");
  }

}
