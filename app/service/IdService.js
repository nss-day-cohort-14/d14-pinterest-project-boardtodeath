"use strict";

app.service("IdService", function() {
	let currentBoardId = [];
	let currentPinId = [];

	const setBoardId = function(currentId) {
		currentBoardId.splice(0, 1, currentId)
	};

	const getBoardId = function() {
		return currentBoardId;
	};

	const setPinId = function(currentId) {
		currentPinId.splice(0, 1, currentId)
	};

	const getPinId = function() {
		return currentPinId;
	};

	return {setBoardId, getBoardId, setPinId, getPinId};
});