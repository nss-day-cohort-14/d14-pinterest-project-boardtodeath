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
	when('/pins', {
		templateUrl: 'partials/pin-view.html',
		controller: 'PinViewCtrl'
	}).
	when('/newPin', {
		templateUrl: 'partials/new-pin-view.html',
		controller: 'NewPinViewCtrl'
	}).
	when('/specPin', {
		templateUrl: 'partials/specific-pin.html',
		controller: 'SpecificViewCtrl'
	}).
	otherwise('/login');

});