import {
	// action,
	autorun,
	computed,
	decorate,
	observable
} from 'mobx'

class TodoStore {
	// @observable todos = []
	// @observable pendingRequests = 0

	constructor() {
		this.todos = observable([])
		this.pendingRequests = observable(0)
		autorun(() => { console.log(this.report) })
	}

	/*
	* @return number Count of completed Todo items
	*/
	get completedTodosCount() {
		return this.todos.filter(
			todo => todo.completed === true
		).length
	}

	/*
	* @return string Description of TodoStore state
	*/
	report() {
		if (this.todos.length === 0) {
			return "<none>"
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

decorate(TodoStore, {
	completedTodosCount: computed,
	report: computed
})

export { TodoStore }

// const todoStore = new TodoStore()

// todoStore.addTodo("read MobX tutorial");
// console.log(todoStore.report());

// todoStore.addTodo("try MobX");
// console.log(todoStore.report());

// todoStore.todos[0].completed = true;
// console.log(todoStore.report());

// todoStore.todos[1].task = "try MobX in own project";
// console.log(todoStore.report());

// todoStore.todos[0].task = "grok MobX tutorial";
// console.log(todoStore.report());
