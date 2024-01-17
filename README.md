# Test plan for Q Team

## Overview of the site
This test plan is about 

## Scope of testing
- Manual testing
- Concurrent testing
- Security testing

## What is out of scope ?
- Performance testing

## Objectives
All tests done, will ensure that the site meets its functionnal and technicals requirements. The overral goal is to identify problems, defects, security issues.

## Test strategy
### Used approach
The approach is composed in multiple steps:
- Responsability of test level
- Definition of level for each test, to prioritize test cases
- Defect management


Responsability

Priority of test cases

## Test cases

### Add an employee
**Description:** adding a new employee to the employees list and verify the fields structure. \
Elements to verify:
- All fields must be completed
- Email address has to be well formatted
- ZIP code must have only positive values, no letters
- All inputs fields must have a label and/or a placeholder

### See all employees
**Description:** all the employees must be displayed, with name, email, manager status, and edit / delete buttons

### Edit an employee
**Description:** In the employees list, when clicking on "Edit", a page should be opened with the following elements:
- Name of the employee and its email address
- Rôle of the employee
- Hiring date
- Button to update the basic information
- Button to update the address
- Button to update the contract
- Button to promote the employee as a manager
- Button to add the employee to a team

#### Update basic information of the employee
The user can update the name and the email of the employee. \
Be sure to verify that errors are generated when the email is invalid or fields are empty. \
Fields must be pre-filled with employee information.

#### Update the address of the employee
The user can update the address, city and ZIP code of the employee. \
Be sure to verify that an error is generated when the fields are empty or the ZIP code is not positive. \
Fields must be pre-filled with employee information.

#### Update the contract of the employee
The user can update the hiring date and job title of the employee. \
Be sure to verify that an error is generated when the date is incorrect of the fields are empty. \
Fields must be pre-filled with employee information.

#### Promote the employee as a manager
When clicking on the "Promote as a manager" button, a page must ask the user to proceed, and the employee will be classified as manager.

#### Add the employee to a team
The user can choose, with a selector, which team he wants to add the user to. \
Clicking on "Add" when a team is selected will result in adding the employee to this team.

### Delete an employee
**Description :** when the "Delete" button is clicked, a new page is opened asking the user to proceed. \
When proceeding, the employee must be deleted from the employees list.

### Add a team
**Description:** adding a new team to the team list. \
It should bot be possible to a create a team with the same name as an existing one.

### See all teams
**Description:** all the teams must be displayed, with their names, action (view members) and delete button.

#### View members of a team
**Description:** when viewing the list of members of the team, the user should see all the names of the members, and be able to remove a member from the team.

### Delete a team
**Description:** when clicking on "Delete" button in the list of teams, a page should be opened asking for the user to proceed. \
On proceed, the team should be deleted and all employees should be left without team.

### Reset database
**Description:** when clicking on "Reset database" button, a page is opened where it asks the user to proceed. \
When proceeding, the database should be resetted and the user should be redirected to the home page.

### Data concurrency
**Description:** when deleting an employee on laptop A, another user on laptop B should not be able to delete the same employee. \
An error message should be displayed to the user indicating that this employee does not exist. \
This test case can be verified with other data management such as database reset or deleting a team.
