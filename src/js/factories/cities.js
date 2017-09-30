angular
  .module('hiddenTravellr')
  .factory('City', City );

City.$inject = ['$resource'];
function City($resource){
  return $resource('/api/home', { id: '@id'}, {
    'update': { method: 'PUT' }
  });
}
