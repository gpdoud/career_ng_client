import { Component, Input } from '@angular/core';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  appName = "CMS - Career Management System";
  get version() { return this.sys.version; }
  get release() { return this.sys.releaseDate; }

  constructor(
    private sys: SystemService
  ) {}

}
