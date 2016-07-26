"use strict";

app.controller("BoardViewCtrl", function($scope, $location, BoardFactory, IdService) {

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

	$scope.showPins = function(uniqueId) {
		IdService.setBoardId(uniqueId)
		$location.url("#/pins");
	};


});