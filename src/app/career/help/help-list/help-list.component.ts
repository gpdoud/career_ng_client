import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/services/system.service';
import { UserService } from '../../user/user.service';
import { Help } from '../help.class';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-help-list',
  templateUrl: './help-list.component.html',
  styleUrls: ['./help-list.component.css']
})
export class HelpListComponent {

  pageTitle = "Help List";
  createRouterLink = "/help/create";
  helps!: Help[];
  get userIsAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private hlpsvc: HelpService,
    private usrsvc: UserService,
    private router: Router
  ) {}

  searchCriteria: string = ''
  sortColumn: string = 'id'
  sortAsc: boolean = true;
  sortCol(col: string): void {
    if(this.sortColumn === col) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = col;
    this.sortAsc = true;
  }

  helpId: number = -1;
  showRemoveVerify: boolean = false;
  detail(id: number): void {
    this.router.navigateByUrl(`/help/detail/${id}`);
  }
  change(id: number): void {
    this.router.navigateByUrl(`/help/change/${id}`);
  }
  remove(id: number): void {
    this.showRemoveVerify = !this.showRemoveVerify;
    this.helpId = id;
  }
  verifyRemove(id: number): void {
    this.hlpsvc.remove(id).subscribe({
      next: (res) => {
        console.debug("Help removed!");
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }

  addRelatedData(helps: Help[]) {
    for(let h of helps) {
    }
  }

  refresh(): void {
    if(this.sys.loggedInUser === null) return;
    this.hlpsvc.list().subscribe({
      next: (res) => {
        this.addRelatedData(res);
        console.debug("Help", res);
        this.helps = res as Help[];
      },
      error: (err) => console.error(err)
    });
  }
  
  ngOnInit(): void {
    this.sys.chkLogin();
    this.refresh();
  }


}
