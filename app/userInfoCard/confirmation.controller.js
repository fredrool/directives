(function(){
	'use strict';

	angular.module('app').controller('confirmation', function($scope, $modalInstance, person) {
		$scope.person = person;

		$scope.yes = function() {
			$modalInstance.close(true);
		}

		$scope.no = function() {
			$modalInstance.close(false);
		}
	})
})();
