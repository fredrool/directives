// Business specific decorator directive
// Would be a good place if there was to be more code
(function(){
	'use strict';

	angular.module('app').directive('userClickSelect', function() {
		return {
			link: function(scope, el, attrs) {
				el.on('click', function() {
					scope.user.selected = !scope.user.selected;
					scope.$apply(); // Tell Angular that this event is fired
				});
			}
		}
	})
})();