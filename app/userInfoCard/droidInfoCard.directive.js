(function(){
	'use strict';
	
	angular.module('app').directive('droidInfoCard', function() {
		return {
			templateUrl: "app/userInfoCard/droidInfoCard.html",
			restrict: 'E',
			scope: {
				droid: '=',
				initialCollapsed: '@collapsed'
			},
			controller: function($scope) {
				$scope.collapsed = ($scope.initialCollapsed === 'true');

				$scope.nextState = function() {
					$scope.droid.level++;
					$scope.droid.level = $scope.droid.level % 4;
				}

				$scope.collapse = function() {
					$scope.collapsed = !$scope.collapsed;
				}
			}
		}
	});
})();