(function(){
	'use strict';
	
	angular.module('app').directive('removeFriend', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/userInfoCard/removeFriend.html',
			scope: {
				notifyParent: '&method'
			},
			controller: function($scope) {
				$scope.removing = false;

				$scope.startRemove = function() {
					$scope.removing = true;
				}

				$scope.cancelRemove = function() {
					$scope.removing = false;
				}

				$scope.confirmRemove = function() {
					$scope.notifyParent(); // Can override param by specifying an object here {'friend': 'Hulk'}
				}
			}
		}
	})
})();