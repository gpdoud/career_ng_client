import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from 'src/app/misc/services/system.service';
import { Help } from './help.class';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  baseurl = 'http://localhost:5555';
  get url() { return `${this.sys.config.baseurl}/api/helps`; }


  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  list(): Observable<Help[]> {
    return this.http.get(`${this.url}`) as Observable<Help[]>;
  }
  get(id: number): Observable<Help> {
    return this.http.get(`${this.url}/${id}`) as Observable<Help>;
  }
  create(help: Help): Observable<Help> {
    return this.http.post(`${this.url}`, help) as Observable<Help>;
  }
  change(help: Help): Observable<any> {
    return this.http.put(`${this.url}/${help.id}`, help) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }

  
}
