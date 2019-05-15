class TodoStore {
	todos = []

	/*
	* @return number Count of completed Todo items
	*/
	get completedTodosCount(): number {
		return this.todos.filter(
			todo => todo.completed === true
		).length
	}

	/*
	* @return string Description of TodoStore state
	*/
	report(): string {
		if (this.todos.length === 0) {
			return "<none>"
		}
		return `Next todo: "${this.todos[0].task}". Progress: ${this.completedTodosCount}/${this.todos.length}`
	}

	/*
	* @param string task Description of new Todo item
	*/
	addTodo(task: string) {
		this.todos.push({
			task,
			completed: false,
			assignee: null
		})
	}
}

const todoStore = new TodoStore()
