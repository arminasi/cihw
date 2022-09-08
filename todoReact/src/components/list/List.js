import React, { Component } from 'react'
import Todo from '../todo/Todo';

export default class List extends Component {
	render() {
		const { todos, deleteTodo, checkboxHandle } = this.props;
		return (
			<div style={{
				width: "270px"
			}}>
				{todos.map(item => <Todo key={item.id} deleteTodo={deleteTodo} item={item} checkboxHandle={checkboxHandle}/>)}
			</div>
		)
	}
}
