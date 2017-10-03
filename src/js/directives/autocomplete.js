/* global google:ignore */
angular
  .module('hiddenTravellr')
  .directive('placesAutocomplete', placesAutocomplete);

function placesAutocomplete(){
  return{
    restrict: 'A',
    scope: {
      lat: '=',
      lng: '='
    },
    require: 'ngModel',
    link($scope, element, attrs, model){
      const autocomplete = new google.maps.places.Autocomplete(element[0]);

      autocomplete.addListener('place_changed', (geometry) => {
        const place = autocomplete.getPlace(geometry);


        $scope.lat = place.geometry.location.lat();
        $scope.lng =  place.geometry.location.lng();
        model.$setViewValue(element.val());
      });
    }

  };
}
