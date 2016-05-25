describe('todo item view', function() {

	var li;

	before(function() {
		li = $('<li></li>');
	});

	it('create empty', function() {
		var todoItemView = new TodoItemView(li);
		chai.assert.equal(todoItemView.dom.length, 1);
	});

	it('after init', function() {
		var todoItemView = new TodoItemView(li);
		todoItemView.init();
		chai.assert.equal(todoItemView.dom.length, 1);
		chai.assert.equal(todoItemView.dom.find('*').length, 2);
	});

	it('set id', function() {
		var todoItemView = new TodoItemView(li);
		todoItemView.init();
		todoItemView.setId('123456');
		chai.assert.equal(todoItemView.dom.attr('todo-item-id'), '123456');
	});

	it('set text', function() {
		var todoItemView = new TodoItemView(li);
		todoItemView.init();
		todoItemView.setText('some todo item text');
		chai.assert.equal(todoItemView.dom.find('span').text(), 'some todo item text');
	});

	it('set checked', function() {
		var todoItemView = new TodoItemView(li);
		todoItemView.init();
		todoItemView.setChecked(true);
		chai.assert.equal(todoItemView.dom.find(':checkbox').is(':checked'), true);
		todoItemView.setChecked(false);
		chai.assert.equal(todoItemView.dom.find(':checkbox').is(':checked'), false);
	});

});