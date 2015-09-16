(function(){
	'use strict';

	angular.module('app').directive('personInfoCard', function() {
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
				this.hero = function(person) {
					person.rank = 'SuperHero !';
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
