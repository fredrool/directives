(function(){
	'use strict';
	
	angular.module('app').directive('droidInfoCard', function() {
		return {
			templateUrl: "app/userInfoCard/droidInfoCard.html",
			restrict: 'E',
			scope: {
				droid: '=',
				initialCollapsed: '@collapsed'
			},
			controllerAs: 'vm',
			bindToController: true,
			controller: function() {} // Must declare a controller to use bindToController, even if empty
		}
	});
})();
