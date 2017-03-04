'use strict';

angular.
  module('todoList').
  component('todoList', {
    templateUrl: 'todo-list/todo-list.template.html',
    controller: function todoListController($http) {
      var self = this;

      this.tasks = [];

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
        if (this.completedTasks() == this.tasks.length)
          this.tasks.forEach(function(task) {
            task.completed = false;
          });
        else
          this.tasks.forEach(function(task) {
            task.completed = true;
          });
      };

      this.remove = function(task) {
        this.tasks.splice(this.tasks.indexOf(task),1);
      };

      this.completedTasks = function() {
        return this.tasks.filter(function(task) {
          return task.completed;
        }).length;
      };

      this.selectAll_button = function() {
        return (this.completedTasks() != this.tasks.length ? 'Select' : 'Unselect') + ' all';
      }

    }
  });
