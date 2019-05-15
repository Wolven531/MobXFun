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
