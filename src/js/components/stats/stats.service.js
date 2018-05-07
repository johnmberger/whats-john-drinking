(function() {

  'use strict';

  angular
    .module('getStats', [])
    .service('getStats', getStats);

  function getStats($http) {
    let vm = this;
    vm.getStats = () => $http({method: 'GET', url: 'https://beer-proxy.herokuapp.com/stats'});
  }

})();
