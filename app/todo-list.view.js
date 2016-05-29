/**
 * todo list view
 */
class TodoListView {

	// ul
	constructor(dom) {
		this.dom = dom;
	}

	prepend(todoItemView) {
		this.dom.prepend(todoItemView.dom);
	}

}