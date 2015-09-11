(function(){
	'use strict';

	angular.module('app').directive('fontScale', function() {
		return {
			link: function(scope, el, attrs) {
				scope.$watch(attrs['fontScale'], function(newVal) {
					el.css('font-size', newVal + '%');
				})
			}
		}
	})
})();