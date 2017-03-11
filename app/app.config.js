angular.
  module('toDoApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {

      $routeProvider.
        when('/todo-list', {
          template: '<todo-list></todo-list>'
        }).
        otherwise('/todo-list');
    }
  ]);
