// sample angular code

(function() {

  'use strict';

  angular
    .module('beerTracker', [
      'ngRoute',
      'ui.materialize',
      'beerTracker.config',
      'beerTracker.components.nav',
      'beerTracker.components.list',
      'beerTracker.components.topTen',
      'getBeers',
      'getTopTen'
    ]);

})();
