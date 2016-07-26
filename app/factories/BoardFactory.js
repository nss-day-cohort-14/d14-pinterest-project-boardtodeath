"use strict";

app.factory("BoardFactory", function(FirebaseURL, $q, $http) {

	const getBoards = function() {
		let boards = [];
		return $q(function(resolve, reject) {
			$http.get(`${FirebaseURL}/boards.json`)
			.success(function(boardsObj) {
				let boardCollection = boardsObj;
				Object.keys(boardCollection).forEach(function(key) {
					boardCollection[key].uniqueId = key;
					boards.push(boardCollection[key]);
				});
				// resolve = .then(function()) in original call function
				resolve(boards);
			})
			.error(function(error){
				reject(error);
			});
		});
	};

	const deleteFB = function(uniqueId) {
		return $q(function(resolve, reject) {
			$http.delete(`${FirebaseURL}/boards/${uniqueId}.json`)
			.success(function() {
				resolve();
			})
			.error(function(error){
				reject(error);
			});
		});
	};

	const postBoardFB = function(newBoard) {
		return $q(function(resolve, reject) {
			$http.post(`${FirebaseURL}/boards.json`,
			JSON.stringify(newBoard))
			.success(function() {
				resolve();
			})
			.error(function(error) {
				reject(error)
			});
		});
	};



	return {getBoards, deleteFB, postBoardFB};

});