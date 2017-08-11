(function() {

  angular
    .module('beerTracker.components.stats', [])
    .controller('statsController', statsController);

  statsController.$inject = ['$scope', 'getStats'];

  function statsController($scope, getStats) {
    let vm = this;

    vm.stats = () => {

      vm.loading = true;
      getStats.getStats()
      .then((res, err) => {
        if (!err) {

          vm.avgRating = res.data.avgRating;

          res.data.styleCount.forEach(style => {
            if (style.count > 3) {
              vm.styleLabels.push(style.name);
              vm.styleData.push(style.count);
            }
          });

          res.data.hourCount.forEach(hour => {
            vm.hourData[parseInt(hour.name)] = hour.count;
          });

          res.data.dayCount.forEach(day => {
            vm.dayLabels.push(day.name);
            vm.dayData.push(day.count);
          });

          res.data.monthCount.forEach(month => {
            vm.monthLabels.push(month.name);
            vm.monthData.push(month.count);
          });

          res.data.ratingCount.forEach(rating => {
            vm.ratingLabels.push(`${rating.name} stars`);
            vm.ratingData.push(rating.count);
          });

        } else {
          vm.error = 'We\'re having trouble connecting to Untappd. Please try later!';
        }
        vm.loading = false;
      })
      .catch(() => {
        vm.error = 'Untappd is mad at us right now. Try back in an hour or so!';
        vm.loading = false;
      });

    };

    vm.styleLabels = [];
    vm.styleData = [];
    vm.styleColors = ['#4B0082'];

    vm.hourLabels = ['Midnight', '1 am', '2 am', '3 am', '4 am', '5 am', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', 'Noon', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', '9 pm', '10 pm', '11 pm'];
    vm.hourData = [];

    vm.dayLabels = [];
    vm.dayData = [];

    vm.monthLabels = [];
    vm.monthData = [];

    vm.lineColors = [{
        backgroundColor: 'rgba(75, 0, 130, 0.7)',
        pointBackgroundColor: 'rgba(75, 0, 130, 0.5)',
        pointHoverBackgroundColor: 'rgba(75, 0, 130, 0.8)',
        borderColor: '#fff',
        pointBorderColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 0, 130, 0.2)'
      }];

    vm.ratingLabels = [];
    vm.ratingData = [];
    vm.ratingColors = [
      '#4DFFD700',
      '#4DFFD700',
      '#4DFFD700',
      '#4DFFD700',
      '#4DFFD700',
      '#4DFFD700',
      '#4DFFD700',
      '#4DFFD700',
      '#4DFFD700',
      '#4DFFD700',
      '#4DFFD700',
      '#4DFFD700',
      '#4DFFD700',
      '#4DFFD700',
      '#4DFFD700',
      '#4DFFD700',
      '#4DFFD700',
      '#4DFFD700',
      '#4DFFD700'
    ];

    vm.stats();

  }
})();
