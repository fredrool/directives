(function(){
	'use strict';

	angular.module('app').directive('userTile', function() {
		return {
			restrict: 'E',
			scope: {
				user: '='
			},
			templateUrl: 'app/selected/user.html'//,
			// controller: function($scope) {
			// 	$scope.select = function() {
			// 		$scope.user.selected = !$scope.user.selected;
			// 	}
			// }
		}
	})
})();