"use strict";

const app = angular.module('Pinterest', ['ngRoute'])
.constant('FirebaseURL', "https://pinterest-b48dd.firebaseio.com");

app.config(function($routeProvider, FBCreds) {
	let authConfig = {
		apiKey: FBCreds.apiKey,
		authDomain: FBCreds.authDomain
	};
	firebase.initializeApp(authConfig);

// route provider tells you html where to go and what code to run
	$routeProvider.
	when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'LoginCtrl' 
	}).
	when('/boards', {
		templateUrl: 'partials/board-view.html',
		controller: 'BoardViewCtrl'
	}).
	when('/newBoard', {
		templateUrl: 'partials/new-board-view.html',
		controller: 'NewBoardCtrl'
	}).
	otherwise('/login');





});