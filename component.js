(function(root, $) {
	'use strict';

	root.NS = {};

	$.extend({
		component: function(name, implementation) {
			NS[name] = implementation;
		}
	});

} (window, jQuery));
