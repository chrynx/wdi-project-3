angular
  .module('hiddenTravellr')
  .controller('LocationsNewCtrl', LocationsNewCtrl)
  .controller('LocationsShowCtrl', LocationsShowCtrl)
  .controller('LocationsEditCtrl', LocationsEditCtrl);

LocationsNewCtrl.$inject = ['$state', 'Location', 'City'];
function LocationsNewCtrl($state, Location, City) {
  const vm  = this;
  vm.cities = City.query();
  vm.create = locationsCreate;

  function locationsCreate(){
    Location
      .save(vm.location)
      .$promise
      .then((response) => {
        console.log('This is after creating a location', response);
        $state.go('citiesIndex');
      });
  }
}

LocationsShowCtrl.$inject = ['$state', 'Location','$stateParams', 'PostComment' ];
function LocationsShowCtrl($state, Location, $stateParams, PostComment) {
  const vm = this;
  vm.newComment = {};
  vm.location = Location.get($state.params);
  vm.delete = locationsDelete;

  function locationsDelete(){
    Location.delete($state.params)
      .$promise
      .then((response) => {
        console.log('This is after deleting a location', response);
        $state.go('citiesIndex');
      });
  }
  function addComment() {
    PostComment
      .save({ locationId: vm.location.id }, vm.newComment)
      .$promise
      .then((comment) => {
        console.log('comment', comment);
        vm.location.comments.push(comment);
        vm.newComment = {};
      });
  }

  function deleteComment(comment) {
    PostComment
      .delete({ locationId: vm.location.id, id: comment.id })
      .$promise
      .then(() => {
        //locate the comment in the array of comments
        const index = vm.location.comments.indexOf(comment);
        //splice it from the array, take 1 element starting from that index
        vm.location.comments.splice(index, 1);
      });
  }
  vm.addComment = addComment;
  vm.deleteComment = deleteComment;
}


LocationsEditCtrl.$inject = ['$state', 'Location', 'City'];
function LocationsEditCtrl($state, Location, City) {
  const vm = this;
  vm.location = {};
  vm.cities = City.query();
  vm.update = locationsUpdate;

  locationsShow();

  function locationsShow(){

    Location
      .get($state.params)
      .$promise
      .then((location) => {
        console.log('This is inside the locationsShow function', location);

        vm.location = location;
        // To make sure that when we send back the city, we're just sending back the id, not the whole city object
        // Originally vm.location.city is the whole object because we are populating it in the show controller in the Express API
        vm.location.city = vm.location.city.id;
        vm.location.createdBy = vm.location.createdBy.id;
      });
  }

  function locationsUpdate(){
    Location
      .update($state.params, vm.location)
      .$promise
      .then((response) => {
        console.log('This is after updating the location', response);
        $state.go('locationsShow', $state.params);
      });
  }
}
