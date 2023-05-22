import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/misc/services/system.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: '../user-maint.component.html',
  styleUrls: ['../user-maint.component.css']
})
export class UserDetailComponent {
  pageTitle = "User Detail";
  readonly: boolean = true;
  verifyDelete: boolean = false;
  user!: User;
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
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
    this.usrsvc.remove(this.user.id).subscribe({
      next: (res) => {
        console.debug("User Removed!");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.usrsvc.get(id).subscribe({
      next: (res) => {
        console.debug("User", res);
        this.user = res as User;
      },
      error: (err) => console.error(err)
    });
  }

}
