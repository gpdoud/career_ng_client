import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  productName: string = "Career Management System";
  author: string = "Greg Doud";
  releaseDate: string = "May 20, 2023"
  majorVersion = 0;
  minorVersion = 1;
  patchVersion = 0;
  get version() {
    let ver = `${this.majorVersion}.${this.minorVersion}`;
    if(this.patchVersion !== 0) {
      ver = `${ver}.${this.patchVersion}`;
    }
    return ver;
  }

}
