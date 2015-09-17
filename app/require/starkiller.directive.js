(function(){
	'use strict';

	angular.module('app').directive('starkiller', function() {
		return {
			scope: true,
			require: '?^^vader', // Look only on parent nodes, not current node
			link: function($scope, el, attrs, vaderCtrl) {
				el.data('name', 'Starkiller');

				// With require '?' we can check if the controller is found or not
				if(!!vaderCtrl) {
					el.data('master', vaderCtrl.name);
					console.log('Starkiller\'s master is ' + vaderCtrl.name);
				} else {
					console.log('Starkiller doesn\'t have a master');
				}
			}
		}
	})
})();