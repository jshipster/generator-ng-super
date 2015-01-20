'use strict';

describe('Controller: <%= component %>', function(){

  beforeEach(module('app.<%= module %>'));

  var _ctrl, _scope;

  beforeEach(inject(function($controller, $injector){

    _scope = $injector.get('$rootScope');

    _ctrl = $controller('<%= component %>', {
      //add injectable services
    });

  }));

  it('should do nothing', function (){
    expect(true).toBe(false);
  });
});

