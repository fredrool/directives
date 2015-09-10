(function(){
	angular.module('app').controller('main', function($scope) {
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
			]
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
			]
		}

		// Breaking encapsulation, moved to directive !
		// $scope.hero = function(user) {
		// 	user.rank = 'Hero';
		// }
	});
})();