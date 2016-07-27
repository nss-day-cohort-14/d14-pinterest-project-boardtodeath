"use strict";

app.controller("PinViewCtrl", function($scope, PinFactory, $location) {

	PinFactory.getPins()
	.then(function(pinCollection){
		$scope.pins = pinCollection;
	});

	$scope.deletePin = function(uniqueId){
		PinFactory.deletePinFB(uniqueId)
		.then(function() {
			$location.url("#/pins");
		});
	};

});