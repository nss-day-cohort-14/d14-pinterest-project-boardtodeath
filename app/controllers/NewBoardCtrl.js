"use strict";

app.controller("NewBoardCtrl", function($scope, $location, BoardFactory, AuthFactory) {
	// establish new board obj

	$scope.addBoard = function() {
		// add user id to new Board obj
		$scope.newBoard.uid = AuthFactory.getUser();
		// run post function to firebase
		BoardFactory.postBoardFB($scope.newBoard)
		.then(function() {
			// on return reload board-view.html
			$location.url("/boards");
		});
	};
});