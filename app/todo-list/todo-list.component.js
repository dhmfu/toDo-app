'use strict';

angular.
  module('todoList').
  component('todoList', {
    templateUrl: 'todo-list/todo-list.template.html',
    controller: function todoListController($http) {
      var self = this;

      $http.get('todo-list/data/tasks.json').then(function(response) {
        self.tasks = response.data;
      });

      this.newTask = {
        priority: 'Low'
      };

      this.addTask = function() {
        this.newTask.completed = false;
        this.tasks.push(this.newTask);
        this.newTask = {
          priority: 'Low'
        };
      };

      this.removeCompleted = function() {
        this.tasks = this.tasks.filter(function(task) {
          return !task.completed;
        });
      };

      this.selectAll = function() {
        this.tasks.forEach(function(task) {
          task.completed = !task.completed;
        });
      };

      this.remove = function(task) {
        this.tasks.splice(this.tasks.indexOf(task),1);
      };
    }
  });
