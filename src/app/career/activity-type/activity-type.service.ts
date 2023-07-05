import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from 'src/app/misc/services/system.service';
import { ActivityType } from './activity-type.class';

@Injectable({
  providedIn: 'root'
})
export class ActivityTypeService {

  baseurl = 'http://localhost:5555';
  get url() { return `${this.sys.config.baseurl}/api/activityTypes`; }

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  list(): Observable<ActivityType[]> {
    return this.http.get(`${this.url}`) as Observable<ActivityType[]>;
  }
  get(id: number): Observable<ActivityType> {
    return this.http.get(`${this.url}/${id}`) as Observable<ActivityType>;
  }
  create(activityType: ActivityType): Observable<ActivityType> {
    return this.http.post(`${this.url}`, activityType) as Observable<ActivityType>;
  }
  change(activityType: ActivityType): Observable<any> {
    return this.http.put(`${this.url}/${activityType.id}`, activityType) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
  
}
