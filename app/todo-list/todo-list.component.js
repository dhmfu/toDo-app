'use strict';

angular.
  module('todoList').
  component('todoList', {
    templateUrl: 'todo-list/todo-list.template.html',
    controller: function todoListController() {
      this.currentTask = {};

      this.tasks=[
        {
          desription: 'lorem ipsum dolar',
          priority: 'High',
          done: false
        },
        {
          desription: 'lodar ipsum lorem',
          priority: 'Low',
          done: false
        }
      ];

      this.addTask = function(task) {
        task.done = false;
        this.tasks.push(task);
        this.currentTask = {};
      }
    }
  });
