(function(){
	'use strict';

	angular.module('app').directive('myRepeat', function() {
		return {
			restrict: 'A',
			transclude: 'element',
			link: function(scope, el, attr, ctrl, transclude) {
				var pieces = attr.myRepeat.split(' ');
				var itemString = pieces[0];
				var collectionName = pieces[2];
				var elements = [];

				scope.$watchCollection(collectionName, function(collection) {
					if(elements.length > 0) {
						for (var i = 0; i < elements.length; i++) {
							elements[i].el.remove();
							elements[i].scope.$destroy();
						};

						elements = [];
					}
				
					for (var i = 0; i < collection.length; i++) {
						var childScope = scope.$new();

						childScope[itemString] = collection[i];
						transclude(childScope, function(clone) {
							el.before(clone);
							var item = {};
							item.el = clone;
							item.scope = childScope;
							elements.push(item);
						})
					}
				});

				
			}
		}
	})
})();
