/* global google:ignore */

angular
  .module('hiddenTravellr')
  .directive('googleMap', googleMap);

function googleMap() {

  return {
    restrict: 'E',
    template: '<div id="map"> I am a Google Map!</div>',
    replace: true,
    scope: {
      center: '='
    },
    link($scope, $element) {

      const map =  new google.maps.Map($element[0], {
        center: { lat: 51.5074, lng: 0.1278},
        zoom: 13
      });

      const marker = new google.maps.Marker({
        map: map
      });

      $scope.$watch('center', () => {
        if(!$scope.center) return false;
        map.setCenter($scope.center);
        marker.setPosition($scope.center);
        console.log(marker);
      });
    }
  };
}
