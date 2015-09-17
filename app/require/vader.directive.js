(function(){
	'use strict';

	angular.module('app').directive('vader', function() {
		var name = 'Vader';

		return {
			scope: true,
			require: '^emperor', // Look on current or parent nodes
			controller: function() {
				this.name = name;
			},
			link: function($scope, el, attrs, emperorCtrl) {
				el.data('name', name);
				el.data('master', emperorCtrl.name);
				console.log('Vader\'s master is ' + emperorCtrl.name);
			}
		}
	})
})();