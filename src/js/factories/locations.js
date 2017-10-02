angular
  .module('hiddenTravellr')
  .factory('Location', Location)
  .factory('PostComment', PostComment);

Location.$inject = ['$resource'];
function Location($resource){
  return $resource('/api/locations/:id', { id: '@id'}, {
    'update': { method: 'PUT' }
  });
}
PostComment.$inject = ['$resource'];
function PostComment($resource) {
  return new $resource('/api/locations/:locationId/comments/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
