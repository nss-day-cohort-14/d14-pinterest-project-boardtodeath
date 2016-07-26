"use strict";

app.service("IdService", function() {
	let currentBoardId = [];

	const setBoardId = function(currentId) {
		currentBoardId.splice(0, 1, currentId)
	};

	const getBoardId = function() {
		return currentBoardId;
	}


	return {setBoardId, getBoardId};
});