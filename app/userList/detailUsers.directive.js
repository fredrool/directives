(function(){
	'use strict';

	angular.module('app').directive('detailUsers', function() {
		return {
			scope: {
				users: '=data',
				selectedUser: '='
			},
			templateUrl: 'app/userList/detailUsers.html'
		}
	})
})();
