### YourScale

## How to run applications step by step:

## 1. install node.js to https://nodejs.org/en/

## 2. Run PoweShell as administrator: set-executionpolicy remotesigned

## 3. Open power shell and type: npm install -g @angular/cli

## 4. npm install --save-dev @angular-devkit/build-angular

## 5. ng build

## 6. ng test

## 7. ng serve

## 8. http: // localhost: 4200 /

## ADD important paths

## 9. npm install --save bootswatch

## 10.add in file main.scss(style.scss) styles bootswatch:

@import "~bootswatch/dist/Slate/variables";
@import "~bootstrap/scss/bootstrap";
@import "~bootswatch/dist/Slate/bootswatch";
@import url("./assets/css/bootstrap.min.css");

## Import in local directory bootstrap, e.g. assets

Download:
https://getbootstrap.com/docs/4.4/getting-started/download/

## 11.link the src in angular.json

## Section root:

            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]

## 12. add src in all files where is been used css like that:

## Go to:

=> app.component.ts

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss',
'./app.component.css']
})

## In projeckt I used bootstrap, You must link the bootstrap in maine.html:

https://getbootstrap.com/docs/4.4/getting-started/introduction/

Zastanów sie jak tego użyjesz do zrobienia slajdera:
https://rangeslider.js.org/

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Programming server

Run `ng serve` for the development server. Go to `http: // localhost: 4200 /`. The application will be automatically reloaded if you change any source file.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use the ng directive that generates | pipe service class guard | interface enum moduł`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist /` directory. Use the `--prod` flag for the production version.

## Running unit tests

Run `ng test` to perform unit tests via [Karma](https://karma-runner.github.io).

## Performing comprehensive tests

Run `ng e2e` to perform comprehensive tests via [Protractor](http://www.protractortest.org/).

## Further help

For more help on Angular CLI, use `ng help` or check [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

test
