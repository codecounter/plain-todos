/**
 * todo-item model
 *
 * that's a todo item
 */
;(function(global) {

	var TodoItemModel = function(id, text, checked) {
		this.id = id || 0;
		this.text = text || '';
		this.checked = checked || false;
	}

	global.TodoItemModel = TodoItemModel;

})(this);