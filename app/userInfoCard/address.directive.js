(function(){
	'use strict';
	
	angular.module('app').directive('address', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/userInfoCard/address.html',
			scope: true, // ok to share inherited data with the userInfoCard directive but we also need our own scope to manage a different 'collapsed' variable
			controller: function($scope) {
				$scope.collapsed = false;

				$scope.collapseAddress = function() {
					$scope.collapsed = true;
				}
				$scope.expandAddress = function() {
					$scope.collapsed = false;
				}
			}
		}
	});
})();