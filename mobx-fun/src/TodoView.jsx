import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class TodoView extends Component {
	onRename = () => {
		const { todo } = this.props
		todo.task = prompt('Task name', todo.task) || todo.task
	}

	onToggleCompleted = () => {
		const { todo } = this.props
		todo.completed = !todo.completed
	}

	render() {
		const { todo } = this.props

		return (
			<li onDoubleClick={this.onRename}>
				<input type='checkbox'
					checked={todo.completed}
					onChange={this.onToggleCompleted} />
				{todo.task}
				{todo.assignee
					? <small>{todo.assignee.name}</small>
					: null
				}
				{/* <RenderCounter /> */}
			</li>
		)
	}
}

export { TodoView }
