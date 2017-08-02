(function() {

  angular
    .module('beerTracker.components.list', [])
    .controller('listController', listController);

  listController.$inject = ['$scope', 'getBeers'];

  function listController($scope, getBeers) {
    let vm = this;

    vm.getCheckIns = () => {
      vm.loading = true;
      getBeers.getCheckIns()
      .then((res, err) => {
        if (!err) {
          vm.checkIns = res.data.response.checkins.items;
        } else {
          vm.error = 'We\'re having trouble connecting to Untappd. Please try later!';
        }
        vm.loading = false;
      })
      .catch(() => {
        vm.error = 'Hm, something went wrong. Please try later!';
        vm.loading = false;
      });

    };

    vm.getCheckIns();
  }
})();
