// sample angular code

(function() {

  'use strict';

  angular
    .module('beerTracker', [
      'ngRoute',
      'ui.materialize',
      'beerTracker.config',
      'beerTracker.components.list',
      'beerTracker.components.topTen',
      'beerTracker.components.stats',
      'getBeers',
      'getTopTen',
      'getStats',
      'chart.js'
    ]);

})();
