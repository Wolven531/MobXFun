import React, { Component } from 'react'
import { observer } from 'mobx-react'

const TodoView = observer(props => null)

@observer
class TodoList extends Component {
	onNewTodo = () => {
		this.props.store.addTodo(prompt('Enter a new todo:', 'coffee plz'))
	}

	render() {
		const { store } = this.props
		return (
			<div>
				{store.report}
				<ul>
					{store.todos.map((todo, index) => <TodoView todo={todo} key={index} />)}
				</ul>
				{store.pendingRequests > 0
					? <div>Loading...</div>
					: null
				}
				<button onClick={this.onNewTodo}>New Todo</button>
				<small> (double-click a todo to edit)</small>
				{/*
					<RenderCounter />
				*/}
			</div>
		)
	}
}

export { TodoList }
