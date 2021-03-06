(function() {

  'use strict';

  angular
    .module('beerTracker.config', [])
    .config(appConfig)
    .filter('dateFormat', () => (input) => new Date(input))
    .filter('noStockPhoto', () => (input) {
      if (input === 'https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png') return null;
      else return input;
    })
    .run(function($templateCache) {
      $templateCache.removeAll();
    });

    function appConfig($routeProvider, $locationProvider) {
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
      .when('/stats', {
        templateUrl: 'html/stats.html',
        controller: 'statsController',
        controllerAs: 'statsCtrl'
      })
      .when('/', {
        templateUrl: 'html/main.html'
      })
      .otherwise('/');
    }

})();
