//  IIFE
(function(){
	angular
		.module('todoApp')
		.controller('TodosController', TodosController);

		function TodosController(){
			//  Contain all the logic for TodosController

			// Capture variable -- this gives us peace of mind when referring to self, we are referring to the todos object
			var self = this;

			self.addTodo = addTodo;
			self.deleteTodo = deleteTodo;

			self.todoList = [
	
			];

			function addTodo() {
				self.todoList.push({
					task: self.text,
					done: false
				});
				self.text = null;
			}
			function deleteTodo($index){
				self.todoList.splice($index,1);
		}
	}
})();