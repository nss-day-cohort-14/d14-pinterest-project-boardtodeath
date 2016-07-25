"use strict";

app.factory('AuthFactory', function() {
	// Set to null, if no user, directed to login page
	let currentUserId = null;

	let provider = new firebase.auth.GoogleAuthProvider();
	// Assign current user Id
	firebase.auth().onAuthStateChanged(function(user) {
		if(user) {
			console.log("User Logged IN");
			currentUserId = user.uid;
		} else {
			console.log("not logged in");
		}
	});

	// Assigns popup
	const authWithProvider = function() {
		return firebase.auth().signInWithPopup(provider);
	};
	// Checks to see if there is a currentUserId
	const isAuthenticated = function() {
		return (currentUserId) ? true : false;
	};
	// Returns user
	const getUser = function() {
		return currentUserId;
	};

	return { authWithProvider, isAuthenticated, getUser };

});