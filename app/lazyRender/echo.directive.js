(function(){
	'use strict';

	angular.module('app').directive('echo', function() {
		return {
			// Must be lower than the myLazyRender 
			// else it will trigger before the button click
			priority: 1100, 
			link: function() {
				console.log('echo');
			}
		}
	})
})();
