"use strict";

app.controller("NavCtrl", function($scope, $location) {
	$scope.logout = function() {
		firebase.auth().signOut()
		.then(function() {
			$location.url("/login");
		});
	};

	$scope.viewAll = function() {
		if ($location.url() === "/pins") {
			$location.url("/boards")
		} else if ($location.url() === "/newBoard") {
			$location.url("/boards")
		} else if ($location.url() === "/newPin") {
			$location.url("/pins")
		} else if ($location.url() === "/specPin") {
			$location.url("/pins")
		}


	}

});