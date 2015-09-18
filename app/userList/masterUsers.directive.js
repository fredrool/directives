(function(){
	'use strict';

	angular.module('app').directive('masterUsers', function(userListState) {
		return {
			scope: {
				users: '=data'
			},
			templateUrl: 'app/userList/masterUsers.html',
			controller: function($scope) {
				$scope.state = userListState;
				userListState.selectedUser = $scope.users[0];
			}
		}
	})
})();
