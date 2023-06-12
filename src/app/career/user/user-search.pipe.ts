import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], search: string):  User[] {
    if(typeof users === "undefined" || users === null) {
      return users;
    }
    search = search.toLowerCase();
    let selected: User[] = []
    for(let u of users) {
      if(
        u.id.toString().toLowerCase().includes(search) ||
        u.email.toString().toLowerCase().includes(search) ||
        u.lastname.toString().toLowerCase().includes(search) ||
        u.firstname.toString().toLowerCase().includes(search) ||
        u.phone.toString().toLowerCase().includes(search) ||
        u.active.toString().toLowerCase().includes(search)
      ) {
        selected.push(u);
      }
    }
    return selected;
  }

}

