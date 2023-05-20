import { Component, Input } from '@angular/core';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() pageTitle: string = "Page Title";
  @Input() routerLink: string = "";

  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService
  ) {}
}
