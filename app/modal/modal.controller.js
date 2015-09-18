(function(){
	'use strict';

	angular.module('app').controller('modal', function($scope) {
		$scope.close = function(response) {
			$scope.closeModal(response);
		}
	})
})();
