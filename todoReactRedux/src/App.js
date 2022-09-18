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

export const idGenerator = generateId();

export default function App () {
	
	
	// clearCompleted = () => {
	// 	this.setState({todoItems: this.state.todoItems.filter(item => !item.isCompleted)})
	// }
	
	// completed = () => {
	// 	return this.state.todoItems.filter(item => item.isCompleted).length
	// } 
	
	return (
		<>
			<Header />
			<List />
			<Footer 
					// length = {this.state.todoItems.length} 
					// completed= {this.completed}
					// clearCompleted = {this.clearCompleted}
					/>
		</>
	)
}