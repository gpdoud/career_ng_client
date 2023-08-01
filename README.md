# Career Demo

## Overview

The purpose of the career app is to help graduates manage their job search so that they find their opportunity quickly. It also allows the Career Coach to stay current on the grad's activities in the job search.

## Logging in

The Career App is a web page. The URL is [http://doudsystems.net/careerng](http://doudsystems.net/careerng). Grads must log in with their email and password (the password will be provided by the Career Coach). It is recommended to use Chrome as the browser.

## Features

There are a number of data items that grads can used to manage their job search process.

### `Company`

This is a collection of the different companies that may have opportunities that the grad might wish to pursue. `A company must be added before an opportunity can be created for that company.`

The data for a company is fairly straight forward. It includes:

* `Id` - a automatically generated unique identifier for the company. No grad imput needed.
* `Name` - Company name (Required)
* `Address` - Address of selected company location (Optional)
* `City` - City of selected company location (Optional)
* `StateCode` - State code of selected company location (Optional)
* `Zip` - Zipcode of selected company location (Optional)
* `Phone` - Phone of selected company location [format: `513-555-1212`] (Optional)
* `Email` - Email of selected company location [format: `info@maxtrain.com`] (Optional)
* `Website` - URL of company (format: `maxtrain.com`) (Optional)
* `ContactName` - Name of company contact (Optional)
* `ContactPhone` - Phone of company contact (Optional)
* `ContactRole` - Role of company contact [i.e. HR, Supervisor, Manager, etc.] (Optional)
* `Active` - Company is still a possible employer

#### Adding a company

To add a new company, start by clicking the `Company` menu item. This will display the `Company List`.

Next, click the `Create New` link right below the menu. The will display the `Company Create` page. Fill in the `Name` field as it is mandatory, then fill in any of the other fields which are all optional.

Press the `Save` button. It will navigate back to the `Company List`.

#### Displaying a company

Displaying a company means the grad can see the data but cannot modify it. Do this by clicking the `Det` (detail) next to the company to display. All the data about the company is displayed.

At the bottom of the page are the `Edit` and `Delete` buttons. The `Edit` button navigates to the `Company Change` page while the `Delete` button is for removing the company.

#### Changing a company

There are two ways to navigate to the `Company Change` page. From the `Company List` page, click the `Chg` action link next to the company to be changed. If displaying a company, click the `Edit` button at the bottom of the page. Both navigate to the `Company Change` page.

From here, just change any data.

***Note: Unchecking the `Active` field will cause the company to not display in the `Company List`. The company is not deleted and can be displayed again by checking `Active`. (Future enhancement)

Click the `Save` button.

#### Removing a company

To remove a company, start by clicking `Det` from the `Company List` page. When the `Company Detail` page displays, click the red `Delete` button, this will reval a red `VerifyDelete` button. Click the `VerifyDelete` button to delete the company. To cancel the delete when showing the `VerifyDelete` button, just click the `Delete` button again and the `VerifyDelete` button will disappear.

### `Opportunity`

An opportunity is a job opening that the grad wishes to pursue. It requires a connection to a company so the company must exist before an opportunity can be created.

Opportunites include the job description, the company, the rank of the opportunity, the connection, all notes concerning the opportunity, and the active indicator. Here is an example of an opportunity:

| Field       | Data                        | Notes                                         |
| ---         | ---                         | ---                                           |
| Id          | 0                           | Not modifible by grad                         |
| Description | Entry level position        | Usually the job title                         |
| Company     | MAX Technical Training      | Company name; ***selected from a list***      |
| Rank        | A - Best                    | (A,B,C) prioritizes opportunities             |
| Connection  | Targeted employer           | How the opportunity was found                 |
| Notes       | Referred by a friend        | Any relevant information                      |
| Active      | Still available to pursue   | Uncheck when it is not longer worth pursuing  |

Once an opportunity is added, the grad can record their activity towards that opportunity by creating activites for the opportunity.

#### Adding an opportunity

To add an opportunity, navigate to the `Opportunity List` page by clicking the `Opportunity` menu at the top of any page. Once the `Opportunity List` page is displayed, the the `Create New` link at the top next to the `Opportunity List` page title.

Once in the `Opportunity Create` page, fill in the `Description`, `Company`, `Rank`, and `Connection`. Then enter any text you want in the `Notes` text box. Leave `Active` checked.

Click the `Save` button.

#### Changing an opportunity

Changing an opportunity is very similar to adding on.

While displaying the `Opportunity List` page, click the `Chg` action link next to the opportunity you want to change. Then change any data except the `Id` which cannot be changed.

Click the `Save` button.

#### Deleting an opportunity

If, for any reason, an opportunity must be removed, start by clicking the `Del` action next to the opportunity to be removed. Once it is clicked, another action called `Verify` will display. This is a check to make sure the `Del` was not clicked by accident. To actually delete the opportunity, click `Verify`. The opportunity will be deleted permanently. If the `Del` was clicked by mistake or the grad decided not to delete it, just click the `Del` again and the `Verify` will disappear.

#### Activities for an opportunity

To navigate to the activities for an opportunity, click the `Act` action link next to the opportunity. This will navigate to the `Opportunity Activity` page. 

See `Activity` for further information.

### `Activity`

An activity is some task done or to be done toward the opportunity. It might be something like doing a follow up email to a person that interviewed the grad or it might be a second interview that is scheduled for three days from today.

Activities for an opportunity are accessible from the opportunity list page then clicking on the `Act` action for the particular opportunity. This will display the `Opportunity Activity` page. It displays some of the opportunity data followed by a list of activities for the the opporunity

#### Creating an activity

To create a new activity, click the `Create New` link on the left side just below the opportunity data. This will display the `Activity Create` page.

The `Id` is generated by the system and not modifiable by the grad.

The `Type` is a drop-down list of all the activity types. The activity types are grouped by: Resume, Interview, and Result. There are some miscellaneous types also. Click on the activity type that most closely identifies that activity being added.

The `Date` is the date that the activity occurred or will occur.

The `Notes` is any information relevant to the activity.

The `Active` if unchecked will not show in the list of activities.

Click the `Save` button.

#### Changing an activity

If a mistake was made in creating an activity or some additional information is pertinent to an existing activity, changing an existing activity is required. Click the `Chg` action link next to the activity to change.

The `Activity Change` page will display with the same data as in the `Activity Create` page. All the data except the `Id` can be changed in the same manor as it was created. Make any changes needed.

Click the `Save` button.

#### Removing an activity

If, for any reason, an activity must be removed, start by clicking the `Del` action next to the activity to be removed. Once it is clicked, another action called `Verify` will display. This is a check to make sure the `Del` was not clicked by accident. To actually delete the activity, click `Verify`. The activity will be deleted permanently. If the `Del` was clicked by mistake or the grad decided not to delete it, just click the `Del` again and the `Verify` will disappear.

### Quick opportunity change

While working with activities, if there is a need to make a change to the opportunity, grads can click the `Chg` at the top right of the page on the line displaying the opportunity. This will navigate directly to the `Opportunity Change` page rather than going back to the list then selecting the opportunity from there. This is just a shortcut for convenience.