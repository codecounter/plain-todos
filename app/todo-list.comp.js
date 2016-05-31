/**
 * todo list component
 */
class TodoListComp {

	constructor(dom) {
		this.dom = dom;
		this.view = new TodoListCompView(this);

		this.todoService = new TodoService();

		this.todos = [];

		this.getTodoList();
	}

	getTodoList() {
		var promise = this.todoService.getTodoList();
		promise.then(_.bind(function(todos) {
			this.todos = todos;
			this.view.refresh();
		}, this)).catch(function() {
			alert('load todo list failure');
		});
	}

	prependByText(text) {
		var todo = new Todo(_.random(10000000, 99999999), text, false);
		this.todos.unshift(todo);
		this.view.refresh();
	}

	setChecked(id, checked) {
		console.log('set id ', id, ' ', checked);
		_.each(this.todos, function(todo) {
			if (todo.id == id) {
				todo.checked = checked;
			}
		});
		this.view.refresh();
	}

}

class TodoListCompView {

	constructor(comp) {
		this.comp = comp;
		var self = this;

		this.dom = this.comp.dom;
		this.dom.html('<ul class="unchecked"></ul><ul class="checked"></ul>');
		this.dom.unchecked = this.dom.find('.unchecked');
		this.dom.checked = this.dom.find('.checked');

		this.dom.on('change', ':checkbox', function() {
			var id = parseInt($(this).parents('li').attr('todo-id'));
			var checked = $(this).is(':checked');
			self.comp.setChecked(id, checked);
		});
	}

	refresh() {
		this.dom.checked.empty();
		this.dom.unchecked.empty();
		var todos = this.comp.todos;
		_.each(todos, _.bind(function(todo) {
			if (todo.checked) {
				this.dom.checked.append('<li todo-id="' + todo.id + '"><span>' + _.escape(todo.text) + '</span><input type="checkbox" ' + (todo.checked ? 'checked="checked"' : '') + ' /></li>');
			} else {
				this.dom.unchecked.append('<li todo-id="' + todo.id + '"><span>' + _.escape(todo.text) + '</span><input type="checkbox" ' + (todo.checked ? 'checked="checked"' : '') + ' /></li>');
			}
		}, this));
	}

}