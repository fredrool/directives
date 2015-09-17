(function(){
	'use strict';

	angular.module('app').directive('starkiller', function() {
		return {
			scope: true,
			link: {
				post: function($scope, el, attrs) {
					el.data('name', 'Starkiller');
					el.data('master', $scope.master);
					console.log('Starkiller\'s master is ' + $scope.master);
				}
			}
		}
	})
})();