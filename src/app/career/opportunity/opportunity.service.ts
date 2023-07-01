import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from 'src/app/misc/services/system.service';
import { Opportunity } from './opportunity.class';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  baseurl = 'http://localhost:5555';
  get url() { return `${this.sys.config.baseurl}/api/opportunities`; }

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  list(): Observable<Opportunity[]> {
    return this.http.get(`${this.url}`) as Observable<Opportunity[]>;
  }
  studentList(userId: number): Observable<Opportunity[]> {
    return this.http.get(`${this.url}/user/${userId}`) as Observable<Opportunity[]>;
  }
  get(id: number): Observable<Opportunity> {
    return this.http.get(`${this.url}/${id}`) as Observable<Opportunity>;
  }
  create(opportunity: Opportunity): Observable<Opportunity> {
    return this.http.post(`${this.url}`, opportunity) as Observable<Opportunity>;
  }
  change(opportunity: Opportunity): Observable<any> {
    return this.http.put(`${this.url}/${opportunity.id}`, opportunity) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
