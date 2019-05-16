import React, { Component } from 'react'

//components
import Emoji from './Emoji'
import { TodoList } from './TodoList'
import { TodoStore } from './TodoStore'

import logo from './logo.svg'

//styles
import './App.scss'
import './App.less'
import './App.styl'

//modules
import cssStyles from './First.module.css'
// import sassStyles from './Second.module.scss'
// import lessStyles from './Third.module.less'
// import stylusStyles from './Fourth.module.styl'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className={cssStyles.header}>
					<img src={logo} className="App-logo" alt="logo" />
					<h2 className="App-title">
						<Emoji label="danger" emoji="☢" />
						<span> custom-react-scripts </span>
						<Emoji label="danger" emoji="☢" />
					</h2>
					<div className="App-subtitle">
						allow custom config for create-react-app without ejecting
					</div>
				</div>
				<TodoList store={new TodoStore()} />
			</div>
		)
	}
}

export default App
