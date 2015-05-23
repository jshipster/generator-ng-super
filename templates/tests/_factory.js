(function(){

  /* global module, inject */

  'use strict';

  describe('Factory: <%= component %>', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.<%= module %>'));

    var <%= component %>;

    beforeEach(inject(function($injector){

      <%= component %> = $injector.get('<%= component %>');

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
