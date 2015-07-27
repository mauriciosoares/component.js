$.component('Hover', {
	init: function() {
		this.bind();
	},

	bind: function() {
		this.$el.on('mouseover', this.onMouseover.bind(this));
		this.$el.on('mouseleave', this.onMouseout.bind(this));
	},

	onMouseover: function() {
		this.$el.addClass('is-active');
	},

	onMouseout: function() {
		this.$el.removeClass('is-active');
	}
});
