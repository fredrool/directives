(function(){
	'use strict';

	angular.module('app').config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider.
	      when('/cards', {
	        templateUrl: 'app/userInfoCard/userInfoCard.html',
	        controller: 'userInfoCard'
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
	      when('/lazyRender', {
	        templateUrl: 'app/lazyRender/lazyRender.html',
	        controller: 'lazyRender'
	      }).
	      when('/repeat', {
	        templateUrl: 'app/repeat/repeat.html',
	        controller: 'repeat'
	      }).
	      when('/require', {
	        templateUrl: 'app/require/require.html',
	        controller: 'require'
	      }).
	      when('/tabstrip', {
	        templateUrl: 'app/tabstrip/base.html',
	        controller: 'tabstrip'
	      }).
	      otherwise({
	        redirectTo: '/'
	      });
	  }]);
})();
