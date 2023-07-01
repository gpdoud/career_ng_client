import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from 'src/app/misc/services/system.service';
import { CompanyConnection } from './company-connection.class';

@Injectable({
  providedIn: 'root'
})
export class CompanyConnectionService {

  baseurl = 'http://localhost:5555';
  get url() { return `${this.sys.config.baseurl}/api/companyConnections`; }

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  list(): Observable<CompanyConnection[]> {
    return this.http.get(`${this.url}`) as Observable<CompanyConnection[]>;
  }
  get(id: number): Observable<CompanyConnection> {
    return this.http.get(`${this.url}/${id}`) as Observable<CompanyConnection>;
  }
  create(opportunity: CompanyConnection): Observable<CompanyConnection> {
    return this.http.post(`${this.url}`, opportunity) as Observable<CompanyConnection>;
  }
  change(opportunity: CompanyConnection): Observable<any> {
    return this.http.put(`${this.url}/${opportunity.id}`, opportunity) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }

}
