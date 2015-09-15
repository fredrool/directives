(function(){
	'use strict';
	
	angular.module('app').directive('droidInfoCard', function() {
		return {
			templateUrl: "app/userInfoCard/droidInfoCard.html",
			restrict: 'E',
			scope: {
				droid: '=',
				initialCollapsed: '@collapsed'
			}
		}
	});
})();
