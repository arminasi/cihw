import React, { Component } from 'react'

export default class Todo extends Component {
	render() {
		const {item, deleteTodo, checkboxHandle} = this.props
		return ( 
			<div style={{

				display: 'flex', 
				width: "250px", 
				justifyContent: "space-between", 
				margin: "2px",
				padding: "8px", 
				background: "#fac864", 
				color: "white"
				
				}}>
				<input type="checkbox" 
					checked={item.isCompleted}
					onChange={() => checkboxHandle(item.id)
				}/>  
				<div>{item.title}</div>
				<button style={{
					border: "none", 
					cursor: "pointer", 
					color: "white", 
					background: "#ff4f38"
					}}
					onClick={
						() => deleteTodo(item.id)
					}>X</button>
			</div>
		)
	}
}
