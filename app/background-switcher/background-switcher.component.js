'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('bgSwitch').
  component('bgSwitch', {
    templateUrl: 'background-switcher/background-switcher.template.html',
    controller: function bgSwitchController($http, $rootScope) {
      $rootScope.mainBackgroundUrl = 'img/backgrounds/elitefon.ru_28513.jpg';
      var self = this;

      self.setBackground = function setBackground(source) {
        $rootScope.mainBackgroundUrl = source;
      }

      $http.get('img/backgrounds.json').then(function(response) {
        self.backgrounds = response.data;
      });
    }
  });
