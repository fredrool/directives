(function(){
	'use strict';

	angular.module('app').directive('emperor', function() {
		var name = 'The Emperor';

		return {
			scope: true,
			controller: function($scope) {
				this.name = name;
			},
			link: function($scope, el, attrs) {
				el.data('name', name);
			}
		}
	})
})();