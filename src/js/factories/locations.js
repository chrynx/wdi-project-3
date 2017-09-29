angular
  .module('hiddenTravellr')
  .factory('Location', Location);

Location.$inject = ['$resource', 'API'];
function Location($resource, API){
  return $resource(`${API}/locations/:id`, { id: '@id'}, {
    'update': { method: 'PUT' }
  });
}
