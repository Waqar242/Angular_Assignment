# AngularAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Composition of Project
# Reuseable Components
Dashboard Card: It contains the following elements in the card on the home screen. 
Total orders, Total expences, Total Revenue, New Users etc.

Recent Blogs Card: It contains the following elements in the card on the home screen. 
Recent Bloga

Blogs Card: It contains the following elements in the card on the blogs screen. 
Blogs

User Card: It contains the following elements in the card on the users screen. 
Users

# Main Components
Home Component: it is composed up of dashboard cards and recent blogs cards. It renders the home screen.

Blogs Component: it is composed up of Blogs cards. It renders the Blogs screen.

Users Component: it is composed up of Users cards. It renders the users screen.

# Layout

Fxflex Layout is used to make the application responsive.
## Angular Material UI components 
Following Angular Material UI components are used to efficiently populate the data on screen for users.
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    MatCardModule,