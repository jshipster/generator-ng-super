(function(){

  'use strict';

  angular
    .module('<%= appname %>')
    .directive('<%= name %>', <%= name %>);
  
  function <%= name %>(){

    var directive = {
      link: link,
      restrict: 'EA',
      template: '<div></div>',
      scope: {

      }
    };

    return directive;

    /////////////////////

    function link (scope, elem, attrs){
      console.info('This is a link function of the directive');
    }
  }
});
