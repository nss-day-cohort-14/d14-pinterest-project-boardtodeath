"use strict";

app.controller('LoginCtrl', function($scope) {

	$scope.login = function() {
		console.log("cluck");
		AuthFactory.authWithProvider()
			// Return of a promise
	    .then(function(result) {
	      $location.path("/boardView");
	      $scope.$apply();
			});
	};

});