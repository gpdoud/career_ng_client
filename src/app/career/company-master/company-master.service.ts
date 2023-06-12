import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from 'src/app/misc/services/system.service';
import { CompanyMaster } from './company-master.class';

@Injectable({
  providedIn: 'root'
})
export class CompanyMasterService {

  baseurl = 'http://localhost:5555';
  get url() { return `${this.sys.config.baseurl}/api/companymasters`; }


  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<CompanyMaster> {
    return this.http.get(`${this.url}/${email}/${password}`) as Observable<CompanyMaster>;
  }
  list(): Observable<CompanyMaster[]> {
    return this.http.get(`${this.url}`) as Observable<CompanyMaster[]>;
  }
  get(id: number): Observable<CompanyMaster> {
    return this.http.get(`${this.url}/${id}`) as Observable<CompanyMaster>;
  }
  create(CompanyMaster: CompanyMaster): Observable<CompanyMaster> {
    return this.http.post(`${this.url}`, CompanyMaster) as Observable<CompanyMaster>;
  }
  change(CompanyMaster: CompanyMaster): Observable<any> {
    return this.http.put(`${this.url}/${CompanyMaster.id}`, CompanyMaster) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }

}
