import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  get Url() { return this.config.baseurl; }

  config: any;
  getSettings(): Promise<any> {
    console.log("Calling getSettings()");
    return this.http.get("./assets/config.json").toPromise().then(
      (data: any) => {
        this.config = data;
        console.debug("config.json:", data);
      }
    )
  }


  constructor(
    private http: HttpClient
  ) { }
}
