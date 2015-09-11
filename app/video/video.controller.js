(function(){
	'use strict';

	angular.module('app').controller('video', function($scope) {
		$scope.messages = [];

		$scope.handlePause = function(e) {
			console.log(e);
			$scope.messages.push({text: 'Paused !'});
			console.log('video paused');
		}
	});
})();