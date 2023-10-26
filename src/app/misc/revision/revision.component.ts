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
      revision: "1.3", releaseDate: "October 26, 2023",
      changes: [
        "Created opportunities for user report"
      ]
    },
    { 
      revision: "1.2", releaseDate: "September 2, 2023",
      changes: [
        "Generate password for new user and display to admins",
        "Increased menu font size"
      ]
    },
    { 
      revision: "1.1", releaseDate: "August 7, 2023",
      changes: [
        "Added ability to search company by user lastname"
      ]
    },
    { 
      revision: "1.0", releaseDate: "August 4, 2023",
      changes: [
        "Added ability to assign company master to students company",
        "Added ability to copy student company to company master"
      ]
    },
    { 
      revision: "0.6", releaseDate: "Jul 14, 2023",
      changes: [
        "Added 'Return to list' to Activity Create and Change",
        "Changed the login dialog width and padding"
      ]
    },
    { 
      revision: "0.5", releaseDate: "Jul 11, 2023",
      changes: [
        "Fixed search and sort on the opportunity list",
        "Set default sort to username on opportunity list",
        "Added AdminOnly boolean to ActivityTypes",
        "Limited maintenance on Activities with ActivityTypes where AdmonOnly",
        "Added textarea to rounded corners style",
        "Opportuities not active are hidden from list by default",
        "Checkbox to display inactive oportunities on list"
      ]
    },
    { 
      revision: "0.4", releaseDate: "Jul 1, 2023",
      changes: [
        "Added the Opportunity table",
        "Show Student name on opportunity if admin",
        "Added the CompanyConnection table",
        "Navigate to Opportunities after login",
        "Added website to CompanyMaster and Company",
        "Students can only assign their companies to opportunities",
        "Activities added to opportunities",
        "Added preliminary help page"
      ]
    },
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
