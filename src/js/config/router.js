angular
  .module('hiddenTravellr')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/users/home.html'
      // controller: 'home as homePage'
    })
    .state('locationsNew', {
      url: '/locations/new',
      templateUrl: '/js/views/locations/new.html',
      controller: 'LocationsNewCtrl as locationsNew'
    })
    .state('citiesIndex', {
      url: '/cities',
      templateUrl: '/js/views/cities/index.html',
      controller: 'CitiesIndexCtrl as citiesIndex'
    })
    .state('citiesShow', {
      url: '/cities/:id',
      templateUrl: '/js/views/cities/show.html',
      controller: 'CitiesShowCtrl as citiesShow'
    })
    .state('citiesNew', {
      url: '/cities/new',
      templateUrl: '/js/views/cities/new.html',
      controller: 'CitiesNewCtrl as citiesNew'
    })
    .state('locationsShow', {
      url: '/locations/:id',
      templateUrl: '/js/views/locations/show.html',
      controller: 'LocationsShowCtrl as locationsShow'
    })
    .state('locationsEdit', {
      url: '/locations/:id/edit',
      templateUrl: '/js/views/locations/edit.html',
      controller: 'LocationsEditCtrl as locationsEdit'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/js/views/auth/login.html',
      controller: 'LoginCtrl as login'
    })

    .state('register', {
      url: '/register',
      templateUrl: '/js/views/auth/register.html',
      controller: 'RegisterCtrl as register'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: '/js/views/users/show.html',
      controller: 'UsersShowCtrl as usersShow'
    });

  $urlRouterProvider.otherwise('/');
}
