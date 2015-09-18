(function(){
	'use strict';

	angular.module('app').controller('main', function($scope) {
		$scope.openModal = function() {
			$scope.modalOpen = true;
		}

		$scope.modalClose = function(response) {
			$scope.closeModal('no');
		}

		$scope.closeModal = function(response) {
			$scope.modalOpen = false;
			console.log('modal closed', response);
		}
	})
})();
