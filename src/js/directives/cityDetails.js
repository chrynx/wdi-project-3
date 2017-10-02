angular
  .module('hiddenTravellr')
  .directive('cityDetails', cityDetails);

function cityDetails(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/views/directives/cityDetails.html',
    scope: {
      city: '='
    }
  };
}
