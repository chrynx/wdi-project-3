/* global google:ignore */

angular
  .module('hiddenTravellr')
  .directive('googleMap', googleMap);

googleMap.$inject = ['$http'];
function googleMap($http) {
  let map = null;
  const markers = [];
  return {
    restrict: 'E',
    template: '<div id="map"> I am a Google Map!</div>',
    replace: true,
    scope: {
      center: '='
    },
    link($scope, $element) {

      map =  new google.maps.Map($element[0], {
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
      getLocations();
    }

  };
  function getLocations() {

  // make a request to the TFL API to get the bike point data
    $http.get('http://localhost:7000/api/locations')
      .then((response) => {
        console.log(response.data);
        response.data.forEach((location) => {
        // run this function once for each bike point location, and pass in the location object
          addMarker(location);
        });
      });

  }
  function addMarker(location) {
  // create an object in the correct format for Google maps to use ('lat' and 'lng' as keys, values as numbers)
    const latLng = { lat: location.lat, lng: location.lng };
    // create a new marker, and declare which map to add it to
    const icon = {
      url: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAmdAAAAJDJlMDIwOWVhLTQyNTUtNDc0MS05Y2M1LTBmYjdkNTY4MTEwZg.jpg',
      size: new google.maps.Size(60, 60),
      scaledSize: new google.maps.Size(40, 40)
    };
    const marker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: icon
    });
    markers.push(marker); // - pushing the marker into the global markers array
    // add an event listener to each marker on the map
    // marker.addListener('click', () => {
    // // when the marker is clicked, run the createInfoWindow function, and pass in the marker object and the location object
    //   createInfoWindow(marker, location);
    //   // $hotelShowName.val(location.name);
    //   // $hotelShowAddress.val(location.formatted_address);
    //   // $hotelShowAvailable.val(location.open_now);
    //   // $hotelShowRating.val(location.rating);
    //   infoWindow2(location);
    // });

  }
}
