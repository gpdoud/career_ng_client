import { Component, Input } from '@angular/core';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent {
  @Input() pageTitle: string = "Page Title";
  @Input() routerLink: string = "";
  @Input() alwaysDisplay: boolean = false;

  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService
  ) {}
}
