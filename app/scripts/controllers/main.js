'use strict';

/**
 * @ngdoc function
 * @name yotodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yotodoApp
 */
angular.module('yotodoApp')
  .controller('MainCtrl', function ($scope, $timeout, localStorageService) {
    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function() {
      localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTodo = function() {
      if ($scope.todo === '' || $scope.todo === undefined) {
        $scope.addError = 'Cannot add a blank error';
        $timeout(function() {
          $scope.addError = '';
        }, 1500);
        return;
      }

      if ($scope.todos.indexOf($scope.todo) !== -1) {
        $scope.addError = 'Item (' + $scope.todo + ') already exists';
        $scope.todo = '';
        $timeout(function() {
          $scope.addError = '';
        }, 1500);
        return;
      }

      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    };

  });
