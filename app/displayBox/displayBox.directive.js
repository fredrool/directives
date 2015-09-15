(function(){
	'use strict';

	angular.module('app').directive('displayBox', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/displayBox/displayBox.html',
			controller: function($scope) {
				$scope.hidden = false;

				$scope.close = function() {
					$scope.hidden = true;
				}

				$scope.message = 'Hijacking the message from the directive!';
			},
			transclude: true,
			scope: true
		}
	})
})();