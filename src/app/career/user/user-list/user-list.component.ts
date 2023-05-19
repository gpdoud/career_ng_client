import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users?: User[];

  constructor(
    private usrsvc: UserService
  ) {}

  sortCol(col: string): void {
    
  }

  ngOnInit(): void {
    this.usrsvc.list().subscribe({
      next: (res) => {
        console.debug("Users", res);
        this.users = res as User[];
      },
      error: (err) => console.error(err)
    });
  }
}
