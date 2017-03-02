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
          completed: false
        },
        {
          desription: 'lodar ipsum lorem',
          priority: 'Low',
          completed: false
        }
      ];

      this.addTask = function(task) {
        task.completed = false;
        this.tasks.push(task);
        this.currentTask = {};
      };

      this.removeCompleted = function() {
        var temp = [];
        for (var i = 0; i < this.tasks.length; i++) {
          if(!this.tasks[i].completed)
            temp.push(this.tasks[i]);
        }
        this.tasks = temp;
      };
    }
  });
