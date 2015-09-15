(function(){
	'use strict';

	angular.module('app').directive('myQuestion', function() {
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: 'app/questions/myQuestion.html',
			scope: {
				questionText: '@q'
			}
		}
	})
})();