(function(){
	'use strict';

	angular.module('app').config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider.
	      when('/cards', {
	        templateUrl: 'app/userInfoCard/cards.html',
	        controller: 'userInfoCards'
	      }).
	      when('/video', {
	        templateUrl: 'app/video/video.html',
	        controller: 'video'
	      }).
	      when('/click', {
	        templateUrl: 'app/click/click.html',
	        controller: 'click'
	      }).
	      when('/selected', {
	        templateUrl: 'app/selected/selected.html',
	        controller: 'selected'
	      }).
	      when('/watch', {
	        templateUrl: 'app/watch/watch.html',
	        controller: 'watch'
	      }).
	      when('/displayBox', {
	        templateUrl: 'app/displayBox/base.html',
	        controller: 'displayBox'
	      }).
	      when('/questions', {
	        templateUrl: 'app/questions/base.html',
	        controller: 'questions'
	      }).
	      otherwise({
	        redirectTo: '/'
	      });
	  }]);
})();