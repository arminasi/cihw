import React, { Component } from 'react'
import Todo from '../todo/Todo';

export default class List extends Component {
	render() {
		const { todoList, deleteTodo, checkboxHandle } = this.props;
		return (
			<div style={{
				width: "270px"
			}}>
				{todoList.map(item => <Todo key={item.id} deleteTodo={deleteTodo} item={item} checkboxHandle={checkboxHandle}/>)}
			</div>
		)
	}
}
