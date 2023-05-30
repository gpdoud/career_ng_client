import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from 'src/app/misc/services/system.service';
import { CustomerMaster } from './customer-master.class';

@Injectable({
  providedIn: 'root'
})
export class CustomerMasterService {

  baseurl = 'http://localhost:5555';
  get url() { return `${this.sys.config.baseurl}/api/customermaster`; }


  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<CustomerMaster> {
    return this.http.get(`${this.url}/${email}/${password}`) as Observable<CustomerMaster>;
  }
  list(): Observable<CustomerMaster[]> {
    return this.http.get(`${this.url}`) as Observable<CustomerMaster[]>;
  }
  get(id: number): Observable<CustomerMaster> {
    return this.http.get(`${this.url}/${id}`) as Observable<CustomerMaster>;
  }
  create(CustomerMaster: CustomerMaster): Observable<CustomerMaster> {
    return this.http.post(`${this.url}`, CustomerMaster) as Observable<CustomerMaster>;
  }
  change(CustomerMaster: CustomerMaster): Observable<any> {
    return this.http.put(`${this.url}/${CustomerMaster.id}`, CustomerMaster) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }

}
