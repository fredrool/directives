(function(){
	'use strict';

	angular.module('app').directive('eventPause', function($parse) {
		return {
			restrict: 'A',

			// Isolated scope could affect other directives on same element
			// scope: {
			// 	eventPause: '&'
			// },

			link: function(scope, el, attrs) {
				var fn = $parse(attrs['eventPause']);

				el.on('pause', function(event) {
					// External event, outside of Angular digest cycle
					// Need to start a new digest cycle
					scope.$apply(function() {
						// scope.eventPause();
						fn(scope, {evt: event});
					})
				})
			}
		}
	})
})();