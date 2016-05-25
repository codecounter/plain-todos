/**
 * todo item view
 */
;(function(global) {

	var TodoItemView = function(dom) {
		// a li jquery object
		this.dom = dom;
	}

	TodoItemView.prototype.init = function() {
		this.dom.html('<input type="checkbox"/><span class="text"></span>');
	}

	TodoItemView.prototype.setId = function(id) {
		this.dom.attr('todo-item-id', id);
	}

	TodoItemView.prototype.setText = function(text) {
		this.dom.find('span').text(text);
	}

	TodoItemView.prototype.setChecked = function(checked) {
		this.dom.find(':checkbox').attr('checked', checked);
	}

	global.TodoItemView = TodoItemView;

})(this);