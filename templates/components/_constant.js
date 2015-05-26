/**
 * @ngdoc object
 * @name app.<%= module %>.constant:<%= component %>
 * @description < description placeholder >
 * @example
   <pre>
   angular.module("someModule", [])
   .config(configuration);

   function configuration(<%= component %>, someProvider){
    //use the injected constant
    };
   </pre>
 */

(function(){

  'use strict';

  var <%= component %> = {
    someConstant: 'hasSomeValue'
  };

	angular
		.module('app.<%= module %>')
		.constant('<%= component %>', <%= component %>);

}());
