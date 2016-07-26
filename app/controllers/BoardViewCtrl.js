"use strict";

app.controller("BoardViewCtrl", function($scope, $location, BoardFactory) {

	BoardFactory.getBoards()
	.then(function(boardsCollection) {
		$scope.boards = boardsCollection;
	});

	$scope.delete = function(uniqueId){
		BoardFactory.deleteFB(uniqueId)
		.then(function() {
			$location.url("#/boards");
		});
	};
});