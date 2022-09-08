import React, { Component } from 'react'
import Footer from './components/footer'
import Header from './components/header/'
import List from './components/list'

function generateId() {
	let id = 0;
	return () => {
		return id += 1;
	}
}

const idGenerator = generateId();

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {text: "", todos: []}
	}
	render() {
		const getInputValue = (e) => {
			this.setState({text: e.target.value})
		}

		const addTodo = () => {
			this.setState({todos: [...this.state.todos, {title: this.state.text, id: idGenerator(), isCompleted: false}], text: ""});
		}

		const deleteTodo = (id) => {
			this.setState({todos: this.state.todos.filter(item => item.id !== id)})
		}

		const checkboxHandle = (id) => {
			const elem = this.state.todos.find(elem => elem.id === id)
			this.setState({todos: this.state.todos.filter(todo => todo.id !== elem.id)})
			setTimeout(() => {
				this.setState({todos: [...this.state.todos, {title: elem.title, id: elem.id, isCompleted: !elem.isCompleted}]})
			}, 200)
		}

		const clearCompleted = () => {
			this.setState({todos: this.state.todos.filter(item => !item.isCompleted)})
		}

		const completed = this.state.todos.filter(item => item.isCompleted).length

		return (
			<>
				<Header
						getInputValue={getInputValue}
						addTodo={addTodo} 
						text={this.state.text}

						/>
				<List
						todos = { this.state.todos }
						deleteTodo = { deleteTodo }
						checkboxHandle = {checkboxHandle}

						/>
				<Footer 
						length = {this.state.todos.length} 
						completed= {completed}
						clearCompleted = {clearCompleted}
						/>
			</>
		)
	}
}