$.component('DataBinding', {
	init: function() {
		this.bind();
	},

	bind: function() {
		this.children.$input.on('keyup', this.onInputChange.bind(this));
	},

	onInputChange: function(event) {
		this.children.$output.text(event.target.value);
	}
});
