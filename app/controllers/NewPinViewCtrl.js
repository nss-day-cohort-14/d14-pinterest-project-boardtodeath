"use strict";

app.controller("NewPinViewCtrl", function($scope, AuthFactory, PinFactory, $location){

	$scope.newPin = {
		title: "",
		imgURL: "",
		comments: "",
		uid: "",
		boardId: ""
	};

	$scope.addPin = function(){
		$scope.newPin.uid = AuthFactory.getUser();
		// add boardId here
		PinFactory.postPinFB($scope.newPin)
		.then(function(){
			$location.url("/pins")
		})
	};

});