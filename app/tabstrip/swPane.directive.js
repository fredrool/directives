(function(){
	'use strict';

	angular.module('app').directive('swPane', function() {
		return {
			restrict: 'E',
			transclude: true,
			scope: {
				title: '@'
			},
			require: '^swTabstrip',
			link: function(scope, el, attrs, tabstripCtrl) {
				tabstripCtrl.addPane(scope);
			},
			templateUrl: 'app/tabstrip/swPane.html'
		}
	})
})();
