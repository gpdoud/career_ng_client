import { Component } from '@angular/core';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  get productName() { return this.sys.productName; }
  get author() { return this.sys.author; }
  get version() {
    let ver = `${this.sys.major}.${this.sys.minor}`;
    if(this.sys.patch !== 0) {
      ver = `${ver}.${this.sys.patch}`;
    }
    return ver;
  }
  get release() {
    return this.sys.releaseDate;
  }
  get state() { return this.sys.state; }

  constructor(
    private sys: SystemService
  ) {}

}
