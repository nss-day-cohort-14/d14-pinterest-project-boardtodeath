"use strict";

app.controller("PinViewCtrl", function($scope, PinFactory) {

	PinFactory.getPins()
	.then(function(pinCollection){
		$scope.pins = pinCollection;
	});
});