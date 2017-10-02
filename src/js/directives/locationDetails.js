angular
  .module('hiddenTravellr')
  .directive('locationDetails', locationDetails);

function locationDetails(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/views/directives/locationDetails.html',
    scope: {
      location: '='
    }
  };
}
