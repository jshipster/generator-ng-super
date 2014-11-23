'use strict';

describe('Controller: <%= name %>', function(){

  var _ctrl, _scope;

  beforeEach(inject(function($controller, $injector){

    _scope = $injector.get('$rootScope');

    _ctrl = $controller('<%= name %>', {
      //add injectable services
    });

  }));

  it('should do nothing', function (){
    expect(true).toBe(false);
  });
});

