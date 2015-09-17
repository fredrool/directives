(function(){
	'use strict';

	angular.module('app').directive('vader', function() {
		return {
			scope: true,
			link: {
				pre: function($scope, el, attrs) {
					el.data('name', 'Vader');
					el.data('master', $scope.master);
					console.log('Vader\'s master is ' + $scope.master);
					$scope.master = 'Vader';
				}
			}
		}
	})
})();