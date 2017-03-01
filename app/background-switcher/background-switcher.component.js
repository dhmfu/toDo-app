'use strict';

angular.
  module('bgSwitch').
  component('bgSwitch', {
    templateUrl: 'background-switcher/background-switcher.template.html',
    controller: function bgSwitchController($http, $rootScope) {
      $rootScope.mainBackgroundUrl = 'img/backgrounds/landscape-nature-sunset-trees_C2bOWoK.jpg';
      var self = this;

      self.isShown = false;

      self.setBackground = function setBackground(source) {
        $rootScope.mainBackgroundUrl = source;
      }

      self.toggleMenu = function toggleMenu() {
        self.isShown=!self.isShown;
      }

      $http.get('img/backgrounds.json').then(function(response) {
        self.backgrounds = response.data;
      });
    }
  });
