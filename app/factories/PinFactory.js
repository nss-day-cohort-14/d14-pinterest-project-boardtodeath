"use strict";

app.factory("PinFactory", function(FirebaseURL, $q, $http) {

	const getPins = function(){

		let pins = [];

		return $q(function(resolve, reject){
			$http.get(`${FirebaseURL}/pins.json`)
			.success(function(pinsObj){
				let pinCollection = pinsObj;
				Object.keys(pinCollection).forEach(function(key){
					pinCollection[key].uniqueId = key;
					pins.push(pinCollection[key]);
				});
				resolve(pins);
			})
			.error(function(error){
				reject(error);
			});
		});
	};

	return {getPins};
});