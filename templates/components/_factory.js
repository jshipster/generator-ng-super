/**
 * @ngdoc service
 * @name app.<%= module %>.<%= component %>
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.<%= module %>')
		.factory('<%= component %>', <%= component %>);

  /* @ngInject */
  function <%= component %>(){
		return {
			testFunction: testFunction
		};

		////////////////////

    /**
     * @ngdoc
     * @name app.<%= module %>.<%= component %>#testFunction
     * @methodOf app.<%= module %>.<%= component %>
     *
     * @description < description placeholder >
     * @example
     * <pre>
     * <%= component %>.testFunction(id);
     * </pre>
     * @param {int} entity id
     */

		function testFunction(id){
			console.info('This is a test function');
		}
	}

}());
