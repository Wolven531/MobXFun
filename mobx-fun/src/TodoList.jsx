import React from 'react'
import { observer } from 'mobx-react'

const TodoView = observer(props => null)

const TodoList = observer(props => {
	const { store } = props
	const onNewTodo = () => {
		store.addTodo(prompt('Enter a new todo:', 'coffee plz'))
	}

	return (
		<div>
			{store.report}
			<ul>
				{store.todos.map((todo, index) => <TodoView todo={todo} key={index} />)}
			</ul>
			{store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null}
			<button onClick={onNewTodo}>New Todo</button>
			<small> (double-click a todo to edit)</small>
			{/*
			<RenderCounter />
			*/}
		</div>
	)
})

export { TodoList }
