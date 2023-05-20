import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';
import { encrypt } from 'dsi-encrypt-password';
import { SystemService } from 'src/app/misc/services/system.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = 'http://localhost:5555';
  get url() { return `${this.sys.config.baseurl}/api/users`; }

  encryptString(str: string): string {
    // encrypt a string if not already encrypted
    if(!str.startsWith("sha256-")) {
      return `sha256-${encrypt(str)}`;
    } 
    // otherwise return original string
    return str;
  }

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<User> {
    return this.http.get(`${this.url}/${email}/${password}`) as Observable<User>;
  }
  list(): Observable<User[]> {
    return this.http.get(`${this.url}`) as Observable<User[]>;
  }
  get(id: number): Observable<User> {
    return this.http.get(`${this.url}/${id}`) as Observable<User>;
  }
  create(user: User): Observable<User> {
    return this.http.post(`${this.url}`, user) as Observable<User>;
  }
  change(user: User): Observable<any> {
    return this.http.put(`${this.url}/${user.id}`, user) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
