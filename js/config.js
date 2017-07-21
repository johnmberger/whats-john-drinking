(function() {

  'use strict';

  angular
    .module('beerTracker.config', [])
    .config(appConfig)
    .filter('dateFormat', function() {
      return function(input) {
        return new Date(input);
      };
    })
    .run(function($templateCache) {
      $templateCache.removeAll();
    });

    function appConfig($routeProvider) {
      $routeProvider
      .when('/list', {
        templateUrl: 'html/beer-list.html',
        controller: 'listController',
        controllerAs: 'listCtrl'
      })
      .when('/top-ten', {
        templateUrl: 'html/top-ten.html',
        controller: 'topTenController',
        controllerAs: 'topTenCtrl'
      })
      .otherwise('/');
    }

})();
