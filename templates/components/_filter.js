(function(){

  angular
    .module('app.<%= module %>')
    .filter('<%= component %>', <%= component %>);


  <%= component %>.$inject = [];

  function <%= component %>(){
    return function (input){
      return '<%= component %> filter: ' + input;
    }
  }

}());
