/**
 * todo item view
 */
class TodoItemView {

	constructor(dom) {
		this.dom = dom;
		this.init();
	}

	init() {
		this.dom.html('<input type="checkbox"/><span class="text"></span>');
	}

	setId(id) {
		this.dom.attr('todo-item-id', id);
	}

	setText(text) {
		this.dom.find('span').text(text);
	}

	setChecked(checked) {
		this.dom.find(':checkbox').attr('checked', checked);
	}
}
