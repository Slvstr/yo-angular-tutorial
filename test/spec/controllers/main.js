'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yotodoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have no items to start', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should add an item to the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it('should add and then remove an item from the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });

  it('should prevent blank todo items', function () {
    scope.todo = '';
    scope.addTodo();
    expect(scope.todos.length).toBe(0);

    scope.todo = 'allowed';
    scope.addTodo();
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it('should prevent adding undefined values', function () {
    scope.addTodo();
    expect(scope.todos.length).toBe(0);
  });
});
