(function(){

  /* global module, inject */

  'use strict';

  describe('Controller: <%= component %>', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.<%= module %>'));

    var ctrl;
    var scope;

    beforeEach(inject(function($controller, $injector){

      scope = $injector.get('$rootScope');

      ctrl = $controller('<%= component %>', {
        //add injectable services
      });

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
