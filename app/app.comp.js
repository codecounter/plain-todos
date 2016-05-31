/**
 * app component
 */
class AppComp {

	constructor(dom) {
		this.dom = dom;
		this.view = new AppCompView(this);

		// setup child comp
		this.addFormComp = new AddFormComp(this.view.dom.addForm);
		this.todoListComp = new TodoListComp(this.view.dom.todoList);

		this.addFormComp.onSubmited(_.bind(function(text) {
			if (text) {
				this.todoListComp.prependByText(text);
			} else {
				alert('text is empty');
			}
		}, this));
	}

}

class AppCompView {

	constructor(comp) {
		this.comp = comp;

		this.dom = this.comp.dom;

		this.dom.html(`
			<form class="add-form"></form>
			<div class="todo-list"></div>
		`);

		this.dom.addForm = this.dom.find('.add-form');
		this.dom.todoList = this.dom.find('.todo-list');
	}

}