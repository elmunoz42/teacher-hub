# TeacherHub

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Admin Login Info

When login is prompted use user-name "Jimi Marks" and password "0007". No other login available at this time.

## Planning
|Status|Objective |Approach|
|------|----------|--------|
|DONE|1)A student can visit a page to see a list of all students of one teacher.|a)Create a class student. b)Create a json file with students and upload them to firebase. c)Install and link firebase and AngularFire by creating a service. d)Create a component to display the student list.
|DONE|2)A student can visit an "About" page that has more information about the teacher.|a) Create the about component and a respective link on the app.component template. b)Create an app.routing.ts file. c)Create a student-list route and an about route.|
|DONE|3)A student can click on another student in the list to visit their profile page, which should include more details about them.|a)Create a student-detail component. b) Create a route for student-detail. c) Create the functionality to trigger that route with a (click) event in the HTML object. d) Create dataService function to retrieve data from Firebase by student key |
|DONE|4)A student can filter the list of users by their achievement level.|Create a pipe and apply it to the student-list after an async pipe that ensures that the Firebase Database's response precedes the filtering actions of the pipe.|
|DONE|5)The teacher can enroll new students. |a)Create a simple login form with a confirm alert. b) Create an admin-component and an add student button. c) Use an ngIf statement to only display the admin-component and the button if the admin variable is set to true. d) Create the functionality in the dataService to create a student profile in the database.|
|DONE|6)The teacher can edit student profiles.|a)Create a button that only displays if the admin variable is set to true. b)Create a form that only displays if admin is true. c) Create the functionality in the dataService for updating firebase.|
|DONE|7)The teacher can delete student profiles.|a)Create a button that only displays if the admin variable is set to true. b) Create the functionality in the dataService for deleting that student from firebase.|

## Installation

`npm install angularfire2 firebase --save`
`bower install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
