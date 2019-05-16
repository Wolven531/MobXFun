// import {
// 	// action,
// 	autorun,
// 	computed,
// 	observable
// } from 'mobx'
import { Component } from 'react'
import { observer } from 'mobx-react'

import { TodoStore } from './TodoStore'

interface ITodoListProps {
	store: TodoStore
}

// @observer
class TodoList extends Component {
	constructor(props: ITodoListProps) {
		super(props)
	}

	public render() {
		const store = this.props.store
		return (
			<div>
				{store.report}
				{/*
				<ul>
					{store.todos.map(
						(todo, idx) => <TodoView todo={todo} key={idx} />
					)}
				</ul>
				{store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null}
				<button onClick={this.onNewTodo}>New Todo</button>
				<small> (double-click a todo to edit)</small>
				<RenderCounter />
				*/}
			</div>
		)
	}

	private onNewTodo = () => {
		this.props.store.addTodo(prompt('Enter a new todo:', 'coffee plz'))
	}
}

export { TodoList }
