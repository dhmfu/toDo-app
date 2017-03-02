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

      this.addTask = function() {
        this.currentTask.completed = false;
        this.currentTask.priority = this.currentTask.priority || 'Low';
        this.tasks.push(this.currentTask);
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

      this.selectAll = function() {
        this.tasks.forEach(function(task) {
          task.completed = true;
        });
      };
    }
  });
