'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('bgSwitch').
  component('bgSwitch', {
    templateUrl: 'background-switcher/background-switcher.template.html',
    controller: function bgSwitchController($http) {
      var self = this;

      $http.get('img/backgrounds.json').then(function(response) {
        self.backgrounds = response.data;
      });
    }
  });
