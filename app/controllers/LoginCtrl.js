"use strict";

app.controller('LoginCtrl', function($scope, $location, AuthFactory) {

	$scope.login = function() {
		AuthFactory.authWithProvider()
			// Return of a promise
	    .then(function(result) {
	      $location.path("/boards");
	      $scope.$apply();
			});
	};

});