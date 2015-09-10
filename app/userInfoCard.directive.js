(function(){
	// Component Directive
	angular.module('app').directive('userInfoCard', function() {
		return {
			// template: 'Name: {{user.name}}<br/><br/><div ng-show="!!user.address">Address: {{user.address.street}}<br/>City: {{user.address.city}}<br/>Country: {{user.address.country}}</div><br/>Friends: <div ng-repeat="friend in user.friends">{{friend}}</div>',
			templateUrl: "app/userInfoCard.html",
			restrict: 'E',
			scope: {
				user: '=',
				initialCollapsed: '@collapsed'
			},
			// replace: true // Deprecated since 1.3
			controller: function($scope) {
				$scope.collapsed = ($scope.initialCollapsed === 'true');

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