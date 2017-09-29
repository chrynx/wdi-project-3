angular
  .module('hiddenTravellr')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('citiesIndex', {
      url: '/',
      templateUrl: '/js/views/cities/homepage.html',
      controller: 'CitiesIndexCtrl as citiesIndex'
    });


  $urlRouterProvider.otherwise('/cities');
}
