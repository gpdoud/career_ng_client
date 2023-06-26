import { Component } from '@angular/core';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.css']
})
export class RevisionComponent {

  pageTitle = "Revisions"

  revisions = [
    { 
      revision: "0.3", releaseDate: "Jun 26, 2023",
      changes: [
        "Added the Company table",
        "Display student owner of company only if user is an admin",
        "Student login to the Company list; admins login to the user list",
        "Inactive students cannot log in."
      ]
    },
    { 
      revision: "0.2", releaseDate: "Jun 14, 2023",
      changes: [
        "Added the CompanyMaster table",
        "Added the Revisions display"
      ]
    },
    { 
      revision: "0.1", releaseDate: "May 22, 2023",
      changes: [
        "Initial release - still in development",
        "Only contains the User data",
        "Login requires an Email and Password",
        "Lists can be sorted by clicking on list display column heading",
        "Lists can be searched for substring"
      ]
    },
  ]

}