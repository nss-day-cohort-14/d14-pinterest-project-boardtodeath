"use strict";

const app = angular.module('Pinterest', ['ngRoute'])
.constant('FirebaseUrl', "https://pinterest-b48dd.firebaseio.com/");

app.config(function($routeProvider, FBCreds) {
	let authConfig = {
		apiKey: FBCreds.apiKey,
		authDomain: FBCreds.authDomain
	};
	firebase.initializeApp(authConfig);

	$routeProvider.
	when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'LoginCtrl' 
	}).
	otherwise('/login');





});