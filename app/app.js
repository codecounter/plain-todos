/**
 * this is application entrence.
 */
;(function(global) {

	var App = function(dom, listView) {
		this.dom = dom;
	}

	App.prototype.init = function() {
		var self = this;

		this.dom.html('<form></form><ul></ul>');
		this.todoListView = new TodoListView(this.dom.find('ul'));
		this.todoListView.init();
		this.addFormView = new AddFormView(this.dom.find('form'));
		this.addFormView.init();

		this.addFormView.onSubmited(function(text) {
			if (text) {
				this.clear();
				alert('will add: ' + text);
			} else {
				alert('text cannot be empty');
			}
		});
	}

	global.App = App;

})(this);