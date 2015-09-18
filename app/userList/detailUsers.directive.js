(function(){
	'use strict';

	angular.module('app').directive('detailUsers', function(userListState) {
		return {
			scope: {
				users: '=data'
			},
			templateUrl: 'app/userList/detailUsers.html',
			controller: function($scope) {
				$scope.state = userListState;
			}
		}
	})
})();
