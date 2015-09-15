(function(){
	'use strict';

	angular.module('app').directive('personInfoCard', function() {
		return {
			templateUrl: "app/userInfoCard/personInfoCard.html",
			restrict: 'E',
			scope: {
				person: '=',
				initialCollapsed: '@collapsed'
			},
			controller: function($scope) {
				$scope.hero = function(person) {
					person.rank = 'SuperHero !';
				}

				$scope.removeFriend = function(friend) {
					var idx = $scope.person.friends.indexOf(friend);

					if(idx > -1) {
						$scope.person.friends.splice(idx, 1);
					}
				}
			}
		}
	});
})();
