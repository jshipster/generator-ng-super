(function(){

  /* global module, inject */

  'use strict';

  describe('Filter: <%= component %>', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.<%= module %>'));

    var <%= component %>;

    beforeEach(inject(function (<%= component %>Filter){

      <%= component %> = <%= component %>Filter;

    }));

    it('should not do anything for now', function(){
      expect(true).toBe(false);
    });

  });
}());
