angular
  .module('hiddenTravellr')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('citiesIndex', {
      url: '/cities',
      templateUrl: 'js/views/cities/homepage.html',
      controller: 'CitiesIndexCtrl as citiesIndex'
    })
    .state('citiesShow', {
      url: '/cities/:id',
      templateUrl: 'js/views/cities/citiesShow.html',
      controller: 'CitiesShowCtrl as citiesShow'
    })
    .state('locationsNew', {
      url: '/locations/new',
      templateUrl: 'js/views/cities/locationsNew.html',
      controller: 'LocationsNewCtrl as locationsNew'
    })
    .state('locationsShow', {
      url: '/locations/:id',
      templateUrl: 'js/views/cities/locationsShow.html',
      controller: 'LocationsShowCtrl as locationsShow'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'js/views/auth/login.html',
      controller: 'LoginCtrl as login'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'js/views/auth/register.html',
      controller: 'RegisterCtrl as register'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: 'js/views/cities/profile.html',
      controller: 'UsersShowCtrl as usersShow'
    });

  $urlRouterProvider.otherwise('/cities');
}
