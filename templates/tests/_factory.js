'use strict';

describe('Factory: <%= component %>', function(){

  beforeEach(module('app.core'));
  beforeEach(module('app.<%= module %>'));

  var _<%= component %>;

  beforeEach(inject(function($injector){

    _<%= component %> = $injector.get('<%= component %>');

  }));

  it('should do nothing', function (){
    expect(true).toBe(false);
  });
});

