/**
 * this is application entrence.
 */
class App {

	constructor(dom, listView, addFormView) {
		this.dom = dom;
		this.listView = listView;
		this.addFormView = addFormView;
	}

	init() {
		this.addFormView.onSubmited(_.bind(this.prependByText, this));
	}

	prependByText(text) {

		if (text) {
			console.log('prepend by text ', text);
			// create todo item
			var item = new TodoItemModel(1, text, false);
			var todoItemView = new TodoItemView($('<li></li>'));
			todoItemView.setId(item.id);
			todoItemView.setText(item.text);
			todoItemView.setChecked(item.checked);
			this.listView.prepend(todoItemView);

			this.addFormView.clear();
		} else {
			alert('text is empty');
		}
	}

}
