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
		this.state = {text: "", todoItems: []}
	}
	
	getInputValue = (e) => {
		this.setState({text: e.target.value})
	}


	addTodo = () => {
		this.setState({todoItems: [...this.state.todoItems, {title: this.state.text, id: idGenerator(), isCompleted: false}], text: ""});
	}
	
	deleteTodo = (id) => {
		this.setState({todoItems: this.state.todoItems.filter(item => item.id !== id)})
	}
	
	checkboxHandle = (id) => {
		const elem = this.state.todoItems.find(elem => elem.id === id)
		this.setState({todoItems: this.state.todoItems.filter(todo => todo.id !== elem.id)})
		setTimeout(() => {
			this.setState({todoItems: [...this.state.todoItems, {title: elem.title, id: elem.id, isCompleted: !elem.isCompleted}]})
		}, 200)
	}
	
	clearCompleted = () => {
		this.setState({todoItems: this.state.todoItems.filter(item => !item.isCompleted)})
	}
	
	completed = () => {
		return this.state.todoItems.filter(item => item.isCompleted).length
	} 
	
	render() {
		return (
			<>
				<Header
						getInputValue={this.getInputValue}
						addTodo={this.addTodo} 
						text={this.state.text}

						/>
				<List
						todoList = { this.state.todoItems }
						deleteTodo = { this.deleteTodo }
						checkboxHandle = {this.checkboxHandle}

						/>
				<Footer 
						length = {this.state.todoItems.length} 
						completed= {this.completed}
						clearCompleted = {this.clearCompleted}
						/>
			</>
		)
	}
}