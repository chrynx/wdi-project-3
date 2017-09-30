angular
  .module('hiddenTravellr')
  .factory('Location', Location);

Location.$inject = ['$resource'];
function Location($resource){
  return $resource('/api/locations/:id', { id: '@id'}, {
    'update': { method: 'PUT' }
  });
}
