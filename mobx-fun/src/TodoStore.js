import {
	// action,
	autorun,
	computed,
	observable
} from 'mobx'

class TodoStore {
	@observable todos = []
	@observable pendingRequests = 0

	constructor() {
		autorun(() => { console.log(this.report) })
	}

	/*
	* @return number Count of completed Todo items
	*/
	@computed get completedTodosCount() {
		return this.todos.filter(
			todo => todo.completed === true
		).length
	}

	/*
	* @return string Description of TodoStore state
	*/
	@computed get report() {
		if (this.todos.length === 0) {
			return '<none>'
		}
		return `Next todo: "${this.todos[0].task}". Progress: ${this.completedTodosCount}/${this.todos.length}`
	}

	/*
	* @param string task Description of new Todo item
	*/
	addTodo(task) {
		this.todos.push({
			task,
			completed: false,
			assignee: null
		})
	}
}

export { TodoStore }
