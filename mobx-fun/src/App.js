import React, { Component } from 'react'

import Emoji from './Emoji'
import { TodoList } from './TodoList'
import { TodoStore } from './TodoStore'

import logo from './logo.svg'

import './App.scss'

class App extends Component {
	render() {
		return (
			<article className="app">
				<section className={cssStyles.header}>
					<img src={logo} className="logo" alt="logo" />
					<h2 className="title">
						<Emoji label="danger" emoji="☢" />
					</h2>
					<div className="subtitle">
						allow custom config for create-react-app without ejecting
					</div>
				</section>
				<TodoList store={new TodoStore()} />
			</article>
		)
	}
}

export default App
