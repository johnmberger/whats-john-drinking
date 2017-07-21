(function() {

  'use strict';

  angular
    .module('getBeers', [])
    .service('getBeers', GetBeers);

  function GetBeers($http) {
    let vm = this;
    vm.getCheckIns = () => $http({method: 'GET', url: 'http://beer-proxy.herokuapp.com/beer-list'});
  }

})();
