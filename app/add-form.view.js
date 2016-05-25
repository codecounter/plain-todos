/**
 * add new todo form
 */
;(function(global) {

	var AddFormView = function(dom) {
		// a form jquery object
		this.dom = dom;
	}

	AddFormView.prototype.init = function() {
		var self = this;
		this.dom.attr('onsubmit', 'return false').html('<input type="text"/><button>add</button>');
		this.dom.find('button').on('click', function() {
			var text = self.getText();
			self.dom.trigger('submited', [text]);
		});
	}

	AddFormView.prototype.onSubmited = function(callback) {
		var self = this;
		this.dom.on('submited', function(e, text) {
			callback.call(self, text);
		});
	}

	AddFormView.prototype.getText = function() {
		return this.dom.find('input').val();
	}

	AddFormView.prototype.setText = function(text) {
		this.dom.find('input').val(text);
	}

	AddFormView.prototype.clear = function() {
		this.setText('');
	}

	global.AddFormView = AddFormView;

})(this);