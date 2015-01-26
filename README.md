# generator-ng-super [![Build Status](https://secure.travis-ci.org/umayr/generator-ng-super.png?branch=master)](https://travis-ci.org/umayr/generator-ng-super)

To install generator-ng-super clone this repository and then:

```bash
cd generator-ng-super
npm install link
```

Finally, initiate the generator:

```bash
mkdir superApp
cd superApp
yo ng-super
```

Generates:

```
├── app
│   ├── index.html
│   ├── src
│   │   ├── app.module.js
│   │   ├── common
│   │   │   └── common.module.js
│   │   ├── core
│   │   │   ├── core.module.js
│   │   │   ├── restangularConfig.js
│   │   │   └── routerConfig.js
│   │   └── welcome
│   │       ├── WelcomeCtrl.js
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
│   ├── clean.js
│   ├── compass.js
│   ├── concurrent.js
│   ├── connect.js
│   ├── copy.js
│   ├── karma.js
│   ├── ngAnnotate.js
│   ├── replace.js
│   ├── usemin.js
│   ├── useminPrepare.js
│   ├── watch.js
│   └── wiredep.js
└── tests
    └── welcome
        └── WelcomeCtrl.js
```

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
 
 	UserCtrl.$inject = [];
 
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
yo ng-super:factory common.calender
```

Produces: ```app/src/common/calender.js```:

```javascript
(function(){
	'use strict';

	angular
		.module('app.common')
		.factory('calender', calender)

	calender.$inject = [];

	function calender(){
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


  currency.$inject = [];

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

  configuration.$injector = ['$stateProvider'];

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

## License

MIT
