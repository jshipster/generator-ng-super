(function(){

  /* global module, inject */

  'use strict';

  describe('Controller: WelcomeCtrl', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.welcome'));

    var ctrl;
    var scope;

    beforeEach(inject(function($controller, $injector){

      scope = $injector.get('$rootScope');
      ctrl = $controller('WelcomeCtrl', {
        //add injectable services
      });

    }));

    it('should do nothing', function (){
      expect(true).toBe(false);
    });

  });
}());

