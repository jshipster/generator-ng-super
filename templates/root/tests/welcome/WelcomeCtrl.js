'use strict';

describe('Controller: WelcomeCtrl', function(){

  beforeEach(module('app.core'));
  beforeEach(module('app.welcome'));

  var _ctrl, _scope;

  beforeEach(inject(function($controller, $injector){

    _scope = $injector.get('$rootScope');

    _ctrl = $controller('WelcomeCtrl', {
      //add injectable services
    });

  }));

  it('should do nothing', function (){
    expect(true).toBe(false);
  });
});

