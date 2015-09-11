(function(){
	'use strict';

	angular.module('app').directive('spacebarSupport', function() {
		return {
			restrict: 'A',
			link: function(scope, el, attrs) {
				$('body').on('keypress', function(evt) {
					var vidElement = el[0];
					if(evt.keyCode === 32) {
						if(vidElement.paused) {
							vidElement.play();
						} else {
							vidElement.pause();
						}
					}
				});
			}
		}
	});
})();