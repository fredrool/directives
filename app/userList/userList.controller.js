(function(){
	'use strict';

	angular.module('app').controller('userList', function($scope) {
		$scope.users = [
			{name: 'Luke', planet: 'Tatooine', job: 'Jedi'},
			{name: 'Han', planet: 'Nowhere', job: 'Bounty Hunter'},
			{name: 'Chewbacca', planet: 'Kashyyyk', job: 'CoPilot'}
		]
	})
})();
