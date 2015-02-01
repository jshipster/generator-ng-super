# generator-ng-super [![Build Status](https://travis-ci.org/mohuk/generator-ng-super.svg?branch=develop)](https://travis-ci.org/mohuk/generator-ng-super)

Read my attempt to explain the ng-Super philosophy [here](http://blogs.mumairkhan.com/2015/02/02/generator-ng-super-philosophy.html).

To install yeoman:

```bash
$ npm install yo -g
```

To install generator-ng-super clone this repository and then:

```bash
$ cd generator-ng-super
$ npm install link
```

Finally, initiate the generator:

```bash
$ mkdir superApp
$ cd superApp
$ yo ng-super
```

Generates:

```
+-- app
¦   +-- index.html
¦   +-- src
¦   ¦   +-- app.module.js
¦   ¦   +-- common
¦   ¦   ¦   +-- common.module.js
¦   ¦   +-- core
¦   ¦   ¦   +-- core.module.js
¦   ¦   ¦   +-- restangularConfig.js
¦   ¦   ¦   +-- routerConfig.js
¦   ¦   +-- welcome
¦   ¦       +-- WelcomeCtrl.js
¦   ¦       +-- welcome.html
¦   ¦       +-- welcome.module.js
¦   +-- styles
¦       +-- css
¦       ¦   +-- main.css
¦       +-- main.scss
¦       +-- partials
¦           +-- _skin.scss
¦           +-- _welcome.scss
+-- bower.json
+-- configLoader.js
+-- gruntfile.js
+-- package.json
+-- tasks
¦   +-- clean.js
¦   +-- compass.js
¦   +-- concurrent.js
¦   +-- connect.js
¦   +-- copy.js
¦   +-- karma.js
¦   +-- ngAnnotate.js
¦   +-- replace.js
¦   +-- html2js.js
¦   +-- usemin.js
¦   +-- useminPrepare.js
¦   +-- watch.js
¦   +-- bump.js
¦   +-- wiredep.js
+-- tests
    +-- welcome
        +-- WelcomeCtrl.js
```

Run ```$ grunt server``` to run the application.

### Sub-generators

#### Controller

Generates an Angular Controller for the provided Module

```bash
yo ng-super:controller dashboard.user
```

Produces: ```app/src/dashboard/UserCtrl.js```:

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

Produces: ```app/src/common/kuSubmit.js```:

```javascript
(function(){

  'use strict';

  angular
    .module('app.common')
    .directive('kuSubmit', kuSubmit);

  function kuSubmit(){

    var directive = {
      link: link,
      restrict: 'EA',
      template: '<div></div>',
      scope: {

      }
    };

    return directive;

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

Produces: ```app/src/common/calendar.js```:

```javascript
(function(){
	'use strict';

	angular
		.module('app.common')
		.factory('calendar', calendar)

	function calendar(){
		var service = {
			testFunction: testFunction
		}

		return service;

		////////////////////

		function testFunction () {
			console.info('This is a test function');
		}
	}
}());
```

###Filter

Generates an Angular Filter for the provided Module

```bash
yo ng-super:filter common.currency
```

Produces: ```app/src/common/currency.js```:

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
### Grunt Tasks

##### ```$ grunt server```
Pops up a development environment with HTML, CSS and JS Livereload

##### ```$ grunt test```
Runs all unit tests on Karma

##### ```$ grunt build```
Creates a ```dist``` containing a distribute-able Angular App

##### ```$ grunt bump```
Bump application version and goodies, details at [grunt-bump](https://github.com/vojtajina/grunt-bump)

###
## License

MIT
