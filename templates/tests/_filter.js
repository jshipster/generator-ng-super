'use strict';

describe('Filter: <%= component %>', function () {

  beforeEach(module('app.<%= module %>'));

  var _<%= component %>;

  beforeEach(inject(function (<%= component %>Filter) {
    _<%= component %> = <%= component %>Filter;
  }));

  it('should not do anything for now', function () {
    expect(true).toBe(false);
  });

});
