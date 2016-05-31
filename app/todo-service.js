/**
 * todo service
 */
class TodoService {

	constructor() {
		this.todoList = [
			new Todo(1, 'todo1', false),
			new Todo(2, 'todo2', false),
			new Todo(3, 'todo3', false)
		];
	}

	getTodoList() {
		var self = this;
		// async simulate
		var promise = new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(self.todoList);
			}, 2000);
		});

		return promise;
	}

}
