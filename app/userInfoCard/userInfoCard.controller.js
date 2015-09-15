(function(){
	'use strict';
	
	angular.module('app').controller('userInfoCards', function($scope) {
		$scope.user1 = {
			name: 'Iron Man',
			address: {
				street: 'Stark Tower Complex',
				city: 'New York City',
				country: 'USA'
			},
			friends: [
				'Thor',
				'Hulk',
				'Captain America'
			],
			level: 0
		}

		$scope.user2 = {
			name: 'Captain America',
			address: {
				street: 'US Army Base',
				city: 'Secret City',
				country: 'USA'
			},
			friends: [
				'Thor',
				'Hulk',
				'Black Widow'
			],
			level: 1
		}

		$scope.droid1 = {
			name: 'R2-D2',
			specifications: {
				manufacturer: 'Industrial Automaton',
				type: 'Astromech',
				productLine: 'R2 series'
			},
			level: 1
		}

		// Breaking encapsulation, moved to directive !
		// $scope.hero = function(user) {
		// 	user.rank = 'Hero';
		// }
	});
})();