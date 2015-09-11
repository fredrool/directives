(function(){
	'use strict';

	angular.module('app').controller('click', function($scope) {
		$scope.data = {message: 'I have not been clicked'};

		$scope.clickHandler = function(p) {
			p.message = 'I have been clicked';
		}
	});
})();