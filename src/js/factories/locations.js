angular
  .module('hiddenTravellr')
  .factory('Location', Location);

Location.$inject = ['$resource'];
function Location($resource){
  return $resource('http://localhost:7000/api/locations/:id', { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
