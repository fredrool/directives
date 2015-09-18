(function(){
	'use strict';

	angular.module('app').factory('armorPolicy', function($q) {
		return {
			upgradeArmor: function(hero) {
				// Promise used to avoid sending a message to the user here, let directive do that
				var promise = $q(function(resolve, reject) {
					if((hero.armorType === 'Metalic' && hero.armorManufacturer === 'Stark')
						|| (hero.armorCategory === 'Robotic' && hero.armorCore === 'AI')) {
						resolve(hero);
					} else {
						reject(hero);
					}
				});

				return promise;
			}
		}
	})
})();
