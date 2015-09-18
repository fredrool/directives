(function(){
	'use strict';

	angular.module('app').directive('personInfoCard', function(armorPolicy) {
		return {
			templateUrl: "app/userInfoCard/personInfoCard.html",
			restrict: 'E',
			scope: {
				person: '=',
				initialCollapsed: '@collapsed'
			},
			controllerAs: 'vm',
			bindToController: true,
			controller: function() {
				this.upgradeArmor = function(person) {
					// Business logic extracted into a service with a promise
					armorPolicy.upgradeArmor(person).then(function() {
						person.rank = 'Armor Upgraded !';
					}, function(person) {
						alert('Sorry, ' + person.name + ' cannot get the armor upgrade.');
					})
				}

				this.removeFriend = function(friend) {
					var idx = this.person.friends.indexOf(friend);

					if(idx > -1) {
						this.person.friends.splice(idx, 1);
					}
				}
			}
		}
	});
})();
