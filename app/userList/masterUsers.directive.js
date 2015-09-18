(function(){
	'use strict';

	angular.module('app').directive('masterUsers', function() {
		return {
			scope: {
				users: '=data',
				selectedUser: '='
			},
			templateUrl: 'app/userList/masterUsers.html',
			controller: function($scope) {
				$scope.selectedUser = $scope.users[0];

				$scope.selectUser = function(user) {
					$scope.selectedUser = user;
				}
			}
		}
	})
})();
