/**
 * add form component
 */
class AddFormComp {

	constructor(dom) {
		this.dom = dom;
		this.view = new AddFormCompView(this);
	}

	onSubmited(callback) {
		this.callback = callback;
	}

}

class AddFormCompView {

	constructor(comp) {
		this.comp = comp;

		this.dom = this.comp.dom;
		
		this.dom.attr('onsubmit', 'return false').html('<input type="text"/><button>add</button>');

		this.dom.find('button').on('click', _.bind(function() {
			if (_.isFunction(this.comp.callback)) {
				this.comp.callback(this.dom.find('input').val());
			}
		}, this));
	}

}