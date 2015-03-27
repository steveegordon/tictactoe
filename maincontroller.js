// IIFE
(function(){
	angular
		.module("TTTapp")
		.controller("TTTcontroller", TTTcontroller);

		function TTTcontroller(){
			// defined function
			var self = this;
// Created 9 tic tac toe squares
			self.boxes = [
			{box: 1,
			 value: 0},
			 {box: 2,
			 value: 0},
			 {box: 3,
			 value: 0},
			 {box: 4,
			 value: 0},
			 {box: 5,
			 value: 0},
			 {box: 6,
			 value: 0},
			 {box: 7,
			 value: 0},
			 {box: 8,
			 value: 0},
			 {box: 9,
			 value: 0}
			]
		}
})();