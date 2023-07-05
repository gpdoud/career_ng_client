import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from 'src/app/misc/services/system.service';
import { Activity } from './activity.class';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  baseurl = 'http://localhost:5555';
  get url() { return `${this.sys.config.baseurl}/api/activities`; }

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  list(): Observable<Activity[]> {
    return this.http.get(`${this.url}`) as Observable<Activity[]>;
  }
  get(id: number): Observable<Activity> {
    return this.http.get(`${this.url}/${id}`) as Observable<Activity>;
  }
  create(activity: Activity): Observable<Activity> {
    return this.http.post(`${this.url}`, activity) as Observable<Activity>;
  }
  change(activity: Activity): Observable<any> {
    return this.http.put(`${this.url}/${activity.id}`, activity) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }

}
