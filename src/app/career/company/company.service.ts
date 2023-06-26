import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from 'src/app/misc/services/system.service';
import { Company } from './company.class';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseurl = 'http://localhost:5555';
  get url() { return `${this.sys.config.baseurl}/api/companies`; }


  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  list(): Observable<Company[]> {
    return this.http.get(`${this.url}`) as Observable<Company[]>;
  }
  listByStudent(userId: number): Observable<Company[]> {
    return this.http.get(`${this.url}/student/${userId}`) as Observable<Company[]>;
  }
  get(id: number): Observable<Company> {
    return this.http.get(`${this.url}/${id}`) as Observable<Company>;
  }
  create(Company: Company): Observable<Company> {
    return this.http.post(`${this.url}`, Company) as Observable<Company>;
  }
  change(Company: Company): Observable<any> {
    return this.http.put(`${this.url}/${Company.id}`, Company) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }

}
