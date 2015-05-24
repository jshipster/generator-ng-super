# generator-ng-super [![Build Status](https://travis-ci.org/mohuk/generator-ng-super.svg?branch=develop)](https://travis-ci.org/mohuk/generator-ng-super)

Read my attempt to explain the ng-Super philosophy [here](http://blogs.mumairkhan.com/2015/02/02/generator-ng-super-philosophy.html).

# Table of Contents:
- [Development Environment Setup](#development-environment-setup)
- [Setup ng-Super webapp](#setup-ng-super-webapp)
- [File and folder structure](#file-and-folder-structure)
- [Sub-Generators](#sub-generators)
  + [Controller](#controller)
  + [Directive](#directive)
  + [Factory](#factory)
  + [Constant](#constant)
  + [Value](#value)
  + [Filter](#filter)
  + [Feature](#feature)
  + [View](#view)
- [Styling and Linting](#style-lint)
- [Grunt Tasks](#grunt-tasks)
- [Third Parties](#third-parties)
- [FAQ](#faq)


## Development Environment Setup

Pre-requisites:
- NodeJS
- Yeoman
- Bower
- Ruby

To install yeoman:

```bash
$ npm install yo -g
```

To install Bower

```bash
$ npm install bower -g
```

To install Compass**

```bash
$ gem install Compass
```
** Make sure you have Ruby installed on your machine

## Setup ng-Super webapp

To install generator-ng-super:

```bash
$ npm install -g generator-ng-super
```

Finally, initiate the generator:

```bash
$ mkdir superApp
$ cd superApp
$ yo ng-super
```

Install project dependencies:

```
$ cd superApp
$ npm install
$ bower install
```

Run ```$ grunt server``` to run the application.

## File and folder structure

```
├── app
│   ├── fonts
│   │   └── Kelvetica Nobis.otf
│   ├── images
│   │   └── welcome
│   │       └── super-logo.jpg
│   ├── index.html
│   ├── src
│   │   ├── app.module.js
│   │   ├── common
│   │   │   └── common.module.js
│   │   ├── core
│   │   │   ├── core.module.js
│   │   │   ├── restangular.config.js
│   │   │   ├── httpStatus.constant.js
│   │   │   └── router.config.js
│   │   └── welcome
│   │       ├── welcome.controller.js
│   │       ├── welcome.html
│   │       └── welcome.module.js
│   └── styles
│       ├── css
│       │   └── main.css
│       ├── main.scss
│       └── partials
│           ├── _skin.scss
│           └── _welcome.scss
├── bower.json
├── configLoader.js
├── gruntfile.js
├── package.json
├── tasks
│   ├── bump.js
│   ├── clean.js
│   ├── compass.js
│   ├── concurrent.js
│   ├── connect.js
│   ├── copy.js
│   ├── html2js.js
│   ├── karma.js
│   ├── ngAnnotate.js
│   ├── replace.js
│   ├── usemin.js
│   ├── useminPrepare.js
│   ├── watch.js
│   └── wiredep.js
└── tests
    └── welcome
        └── welcome.controller.js
```

## Sub-Generators

#### Controller

Generates an Angular Controller for the provided Module

```bash
yo ng-super:controller dashboard.user
```

Produces: ```app/src/dashboard/user.controller.js```:

```javascript
 (function(){
  'use strict';
 
  angular
    .module('app.dashboard')
    .controller('UserCtrl', UserCtrl)
 
  function UserCtrl(){
    vm = this;
 
    vm.testFunction = testFunction;

    /////////////////////
     
    function testFunction () {
      console.info('This is a test function');
    }
  }
 }());
```

#### Directive

Generates an Angular Directive for the provided Module

```bash
yo ng-super:directive common.kuSubmit
```

Produces: ```app/src/common/kuSubmit.directive.js```:

```javascript
(function(){

  'use strict';

  angular
    .module('app.common')
    .directive('kuSubmit', kuSubmit);

  function kuSubmit(){

    return {
      link: link,
      restrict: 'EA',
      template: '<div></div>',
      scope: {

      }
    };

    /////////////////////

    function link (scope, elem, attrs){
      console.info('This is a link function of the directive');
    }
  }
}());
```

#### Factory

Generates an Angular Factory for the provided Module

```bash
yo ng-super:factory common.calendar
```

Produces: ```app/src/common/calendar.factory.js```:

```javascript
(function(){
  'use strict';

  angular
    .module('app.common')
    .factory('calendar', calendar)

  function calendar(){
    return {
      testFunction: testFunction
    }

    ////////////////////

    function testFunction () {
      console.info('This is a test function');
    }
  }
}());
```

#### Constant

Generates an Angular Constant for the provided Module

```bash
yo ng-super:constant common.errorMessages
```

Produces: ```app/src/common/errorMessages.constant.js```:

```javascript
/**
 * @ngdoc constant
 * @module app.common
 * @name errorMessages
 * @description < description placeholder >
 */

(function(){

  'use strict';

  var errorMessages = {
    someConstant: 'hasSomeValue'
  };

  angular
	  .module('app.common')
	  .constant('errorMessages', errorMessages);

}());
```

#### Value

Generates an Angular Value for the provided Module

```bash
yo ng-super:value core.appId
```

Produces: ```app/src/core/appId.value.js```:

```javascript
/**
 * @ngdoc value
 * @module app.core
 * @name appId
 * @description < description placeholder >
 */

(function(){

  'use strict';

  var appId = {
    someValue: 'obviouslyHasSomeValue'
  };

  angular
	  .module('app.core')
	  .value('appId', appId);

}());
```

### Filter

Generates an Angular Filter for the provided Module

```bash
yo ng-super:filter common.currency
```

Produces: ```app/src/common/currency.filter.js```:

```javascript
(function(){

  angular
    .module('app.common')
    .filter('currency', currency);

  function currency(){
    return function (input){
      return 'currency filter: ' + input;
    }
  }

}());
```


#### Feature

Generates an Angular Module

```bash
yo ng-super:feature talks
```

Produces: ```app/src/talks/talks.module.js```:

```javascript
(function(){
  'use strict';

  angular
    .module('app.talks', [])
    .config(configuration);

  function configuration($stateProvider){

    //add your state mappings here
    //$stateProvider
    //  .state();
  }
}());
```

#### View

Generates an HTML view

```bash
yo ng-super:view dashboard.performance
```

Produces: ```app/src/dashboard/performance.html```:

```html
<div> this a a sample view for dashboard.performance </div>
```

## Styling and Linting
Generated app would contain jshint and jscs configurations. Make sure your editor is configured to take advantage of both styling and linting. 

## Grunt Tasks

##### ```$ grunt server```
Pops up a development environment with HTML, CSS and JS Livereload

##### ```$ grunt test```
Runs all unit tests on Karma

##### ```$ grunt build```
Creates a ```dist``` containing a distribute-able Angular App

##### ```$ grunt bump```
Bump application version and goodies, details at [grunt-bump](https://github.com/vojtajina/grunt-bump)

### Third Parties

Following packages are pre-configured:

- [Angular UI Router](https://github.com/angular-ui/ui-router)
- [Restangular](https://github.com/mgonto/restangular)
- [Twitter Bootstrap](http://getbootstrap.com/)
- [UI Bootstrap](http://angular-ui.github.io/bootstrap/)
- [Karma](http://karma-runner.github.io/0.12/index.html) with [Jasmine](http://jasmine.github.io/)

### FAQ

#### Why generator-ng-super?

**generator-ng-super** is a heavily opinionated project that has been initiated to contain mix of best practices learned through courses and expirience. Alot of work has been shamelessly pulled in through John Papa's course of [Angular JS Patterns: Clean Code](http://www.pluralsight.com/courses/angularjs-patterns-clean-code) and its corresponding [Angular JS Style Guide](https://github.com/johnpapa/angularjs-styleguide). 

It also contains a mix of packages which are best in the business pre-configured into the application structure like Angular UI's Twitter Bootstrap Directives, Angular UI's UI-Router (replacing ngRoute) and Martin Gonto's Restangular (replacing $http and $resource).

The main purpose of **generator-ng-super** was to encapsulate the best from the industry experts and make it ready for use.

#### Why the chosen directory structure and code pattern?

The directory structure has been chosen to ease readability and search for code while keeping the directory structure flat. It corresponds to John Papa's LIFT principle of code organization.

- L - Locate your code easily
- I - Identify code at a glance
- F - Flat structure as long as we can
- T - Try to stay DRY

#### What am I getting out of the box?

**generator-ng-super** will provide a complete running Angular JS application with all the goodies like sample code, tests and packages setup in a few mins. Each sub-generator for the components provides sample code enabling the developer to get straight down to business of writing code, all the other setup configuration and code is taken care of by the generator.

#### Why Angular UI Router instead of ngRoute?

UI-Router contains all the missing features from the ngRouter. Visit [Angular UI Router](https://github.com/angular-ui/ui-router) for further insight.

#### Why Restangular instead of $http or $resource?

Restangular provides tons of goodies through which you can setup your HTTP requests in a very intuitive way. Visit [Restangular](https://github.com/mgonto/restangular) for further insight.

## License

MIT
