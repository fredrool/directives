(function(){
	'use strict';
	
	// Component Directive
	angular.module('app').directive('userInfoCard', function() {
		return {
			// template: 'Name: {{user.name}}<br/><br/><div ng-show="!!user.address">Address: {{user.address.street}}<br/>City: {{user.address.city}}<br/>Country: {{user.address.country}}</div><br/>Friends: <div ng-repeat="friend in user.friends">{{friend}}</div>',
			templateUrl: "app/userInfoCard/userInfoCard.html",
			restrict: 'E',
			scope: {
				user: '=',
				initialCollapsed: '@collapsed'
			},
			// link: function(scope, el, attrs) {
			// 	scope.nextState = function() {
			// 		scope.user.level++;
			// 		scope.user.level = scope.user.level % 3;
					// setState();
				// }

				// Moved to its own directive
				// function setState() {
				// 	switch(scope.user.level) {
				// 		case 0:
				// 			el.find('.panel-body').css('background-color', 'white');
				// 			break;
				// 		case 1:
				// 			el.find('.panel-body').css('background-color', 'yellow');
				// 			break;
				// 		case 2:
				// 			el.find('.panel-body').css('background-color', 'red');
				// 			break;
				// 	}
				// }

				// setState();
			// },
			// replace: true // Deprecated since 1.3
			controller: function($scope) {
				$scope.collapsed = ($scope.initialCollapsed === 'true');

				$scope.nextState = function() {
					$scope.user.level++;
					$scope.user.level = $scope.user.level % 4;
				}

				$scope.hero = function(user) {
					user.rank = 'SuperHero !';
				}

				$scope.collapse = function() {
					$scope.collapsed = !$scope.collapsed;
				}

				$scope.removeFriend = function(friend) {
					var idx = $scope.user.friends.indexOf(friend);

					if(idx > -1) {
						$scope.user.friends.splice(idx, 1);
					}
				}
			}
		}
	});
})();