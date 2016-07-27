"use strict";

app.controller("SpecificViewCtrl", function($scope, PinFactory) {

	PinFactory.getSpecPins()
	.then(function(specPin){
		console.log(specPin)
		$scope.specPin = specPin;
	}); 

});