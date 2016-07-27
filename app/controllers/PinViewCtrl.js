"use strict";

app.controller("PinViewCtrl", function($scope, PinFactory, $location, IdService) {

	PinFactory.getPins()
	.then(function(pinCollection){
		$scope.pins = pinCollection;
	});

	$scope.deletePin = function(uniqueId){
		console.log("Did you delete a pin?");
		PinFactory.deletePinFB(uniqueId)
		.then(function() {
			$location.url("#/pins");
		});
	};

	$scope.viewSelectedPin = function(uniqueId){
		IdService.setPinId(uniqueId);
		$location.url('#/specPin')	
	};

});