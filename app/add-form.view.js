/**
 * add new todo form
 */
class AddFormView {

	constructor(dom) {
		this.dom = dom;
		this.init();
	}

	init() {
		this.dom.attr('onsubmit', 'return false').html('<input type="text"/><button>add</button>');
		this.dom.find('button').on('click', _.bind(function() {
			var text = this.getText();
			this.dom.trigger('submited', [text]);
		}, this));
	}

	on(eventType, callback) {
		this.dom.on(eventType, callback);
	}

	onSubmited(callback) {
		var self = this;
		this.dom.on('submited', function(e, text) {
			callback.call(self, text);
		});
	}

	getText() {
		return this.dom.find('input').val();
	}

	setText(text) {
		this.dom.find('input').val(text);
	}

	clear() {
		this.setText('');
	}
}