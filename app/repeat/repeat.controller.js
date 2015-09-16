(function(){
	'use strict';

	angular.module('app').controller('repeat', function($scope) {
		$scope.bountyHunters = [{
			name: 'Boba Fett'
		},
		{
			name: 'IG-88'
		},
		{
			name: 'Dengar'
		},
		{
			name: 'Bossk'
		},
		{
			name: 'Cad Bane'
		}]

		$scope.add = function() {
			$scope.bountyHunters.push({name: '4LOM'});
		}

		$scope.remove = function() {
			$scope.bountyHunters.length--;
		}
	})
})();
