(function(){
	'use strict';

	angular.module('app').directive('myLazyRender', function() {
		return {
			restrict: 'A',
			transclude: 'element',
			priority: 1200, // Must be higher priority than the ng-repeat (1000) for lazy load
			link: function(scope, el, attr, ctrl, transclude) {
				var hasBeenShown = false;
				var unwatchFn = scope.$watch(attr.myLazyRender, function(value) {
					if(value && !hasBeenShown) {
						hasBeenShown = true;

						transclude(scope, function(clone) {
							el.after(clone);
						});

						unwatchFn();
					}
				})
			}
		}
	})
})();
