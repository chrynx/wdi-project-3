angular
  .module('hiddenTravellr')
  .factory('City', City);

City.$inject = ['$resource'];
function City($resource){
  return $resource('http://localhost:7000/api/cities/:id', { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
