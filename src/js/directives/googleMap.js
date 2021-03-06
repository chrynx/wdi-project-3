/* global google:ignore */
/* global markerCluster:ignore */
/* global MarkerClusterer:ignore */
angular
  .module('hiddenTravellr')
  .directive('googleMap', googleMap);

googleMap.$inject = [];
function googleMap() {
  let map = null;
  // const markers = [];
  return {
    restrict: 'E',
    template: '<div id="map"> I am a Google Map!</div>',
    replace: true,
    scope: {
      center: '=',
      locations: '=',
      places: '=',
      type: '=',
      radius: '='
    },
    link($scope, $element) {
      const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let markers = [];
      let markerCluster = null;
      // const locationType = [$scope.type];
      map =  new google.maps.Map($element[0], {
        center: { lat: 51.5074, lng: 0.1278},
        zoom: 7
      });

      map.addListener('click', (e) => {
        console.log('map click', e);
        getNearbyPlaces(e.latLng, $scope.radius, $scope.type);
      });
      // ------------------------------TRYING OUT THE NEARBY--------------

      function getNearbyPlaces(center, radius, type) {
        const request = {
          location: center,
          radius: radius,
          type: [type]
        };

        service.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            addPlaceMarkers(results);
            console.log(results);
            $scope.places = results.map(result => {
              result.imageUrl = result.photos ? result.photos[0].getUrl({maxHeight: 200}) : null;
              return result;
            });
            $scope.$apply();
          }
        });
      }

      const service = new google.maps.places.PlacesService(map);

      function addPlaceMarkers(results) {
        let selectedMarker = null;
        markers.forEach(marker => marker.setMap(null));
        if(markerCluster) markerCluster.clearMarkers();
        markers = results.map((result, i) => { // I am adding the i as an argument
          const marker = new google.maps.Marker({
            map: map,
            position: result.geometry.location,
            animation: google.maps.Animation.DROP,
            label: labels[i % labels.length] // I added the label here to label the markers
          });

          marker.addListener('click', (e) => {
            selectedMarker = marker;
            getNearbyPlaces(e.latLng, $scope.radius, $scope.type);
          });

          return marker;
        });
        markerCluster = new MarkerClusterer(map, markers,
          {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        if(selectedMarker) {
          selectedMarker.setMap(map);
          markers.push(selectedMarker);
        }
      }

      // -------------------------------------------------------
      const centerIcon = {
        url: 'https://maxcdn.icons8.com/Share/icon/Sports//centre_of_gravity1600.png',
        size: new google.maps.Size(60, 60),
        scaledSize: new google.maps.Size(20, 20)
      };
      const marker = new google.maps.Marker({ // this is the centre of the city
        map: map,
        animation: google.maps.Animation.DROP,
        icon: centerIcon
      });
      $scope.$watchGroup(['type', 'radius', 'center'], () => {
        console.log('watchGroup fired...', $scope.center, $scope.radius, $scope.type);
        if(!$scope.center.lat || !$scope.center.lng || !$scope.radius || !$scope.type) return false;
        map.setCenter($scope.center);
        marker.setPosition($scope.center);
        getNearbyPlaces($scope.center, $scope.radius, $scope.type);
      });
      // $scope.$watch('type', () => {
      //   getNearbyPlaces($scope.center, $scope.radius, $scope.type);
      // });
      // $scope.$watch('radius', () => {
      //   getNearbyPlaces($scope.center, $scope.radius, $scope.type);
      // });
      // $scope.$watch('center', () => {
      //   if(!$scope.center.lat || !$scope.center.lng) return false;
      //   map.setCenter($scope.center);
      //   marker.setPosition($scope.center);
      //   getNearbyPlaces($scope.center, $scope.radius, $scope.type);
      // }, true);

      $scope.$watch('locations', () => {
        if(!$scope.locations) return false;
        $scope.locations.forEach(addMarker);
      });

      function addMarker(location) {
        // create an object in the correct format for Google maps to use ('lat' and 'lng' as keys, values as numbers)
        const latLng = { lat: location.lat, lng: location.lng };
        // create a new marker, and declare which map to add it to
        const icon = {
          url: 'https://openclipart.org/download/247319/abstract-user-flat-3.svg',
          size: new google.maps.Size(60, 60),
          scaledSize: new google.maps.Size(20, 20)

        };
        new google.maps.Marker({
          position: latLng,
          map: map,
          icon: icon,
          animation: google.maps.Animation.DROP
        });

      }
    }

  };


}
