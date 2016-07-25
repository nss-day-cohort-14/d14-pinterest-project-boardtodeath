"use strict";

app.controller("NavCtrl", function($scope, $location) {
	$scope.logout = function() {
		firebase.auth().signOut()
		.then(function() {
			$location.url("/login");
		});
	};
});