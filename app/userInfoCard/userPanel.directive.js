(function(){
	'use strict';

	angular.module('app').directive('userPanel', function() {
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: 'app/userInfoCard/userPanel.html',
			scope: {
				name: '@',
				level: '=',
				initialCollapsed: '@collapsed'
			},
			controller : function($scope) {
				$scope.collapsed = ($scope.initialCollapsed === 'true');

				$scope.nextState = function(evt) {
					evt.stopPropagation();
					evt.preventDefault();
					
					$scope.level++;
					$scope.level = $scope.level % 4;
				}

				$scope.collapse = function() {
					$scope.collapsed = !$scope.collapsed;
				}
			}
		}
	})
})();
