"use strict";

const app = angular.module('Pinterest', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.
	when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'LoginCtrl' 
	}).
	otherwise('/login');





});