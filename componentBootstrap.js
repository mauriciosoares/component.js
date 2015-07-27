(function(root, $) {
	'use strict';

	function ComponentBootstrap(el) {
		this.$el = $(el);
		var macroComponentName = this.$el.data('component');
		macroComponentName.split(':').forEach(this.eachComponent.bind(this));
	}

	ComponentBootstrap.prototype.eachComponent = function(componentName) {
		this.componentName = componentName;
		this.componentInstance = Object.create(root.NS[this.componentName]);

		this.componentInstance.$el = this.$el;
		this.componentInstance.params = this.$el.data('component-params');
		this.componentInstance.children = {};
		this.$el.find('[data-component-child^="' + this.componentName + '/"]').each(this.eachChild.bind(this));
		this.componentInstance.init();
	}

	ComponentBootstrap.prototype.eachChild = function(i, el) {
		var $el = $(el);
		var name = $el.data('component-child').replace(this.componentName + '/', '');
		this.componentInstance.children['$' + name] = $el;
	}

	$('[data-component]').each(function(index, el) {
		return new ComponentBootstrap(el);
	});

} (window, jQuery))

// mediator
