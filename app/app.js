'use strict';

var toDoApp = angular.module('toDoApp', []);

toDoApp.controller('mainController', function($scope) {
  $scope.test = 'Hello World'
});
