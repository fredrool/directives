(function(){
	'use strict';

	angular.module('app').controller('repeat', function($scope) {
		$scope.bountyHunters = [{
			name: 'Boba Fett', age: 42
		},
		{
			name: 'IG-88', age: 351
		},
		{
			name: 'Dengar', age: 53
		},
		{
			name: 'Bossk', age: 22
		},
		{
			name: 'Cad Bane', age: 35
		}]

		$scope.add = function() {
			$scope.bountyHunters.push({name: '4LOM', age: 888});
		}

		$scope.remove = function() {
			$scope.bountyHunters.length--;
		}
	})
})();
