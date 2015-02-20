'use strict';

/**
 * @ngdoc function
 * @name yotodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yotodoApp
 */
angular.module('yotodoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
