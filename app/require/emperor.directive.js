(function(){
	'use strict';

	angular.module('app').directive('emperor', function() {
		return {
			scope: true,
			link: {
				pre: function($scope, el, attrs) {
					el.data('name', 'The Emperor');
					$scope.master = 'The Emperor';
				}
			}
		}
	})
})();