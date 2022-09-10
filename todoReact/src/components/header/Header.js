import React, { Component } from 'react'

export default class Header extends Component {
	render() {
		const { getInputValue, addTodo, text } = this.props;

		return (
			<div style={{
				display: "flex", 
				width: "250px", 
				justifyContent: "space-between", 
				background: "#639edb", 
				alignItems: "center", 
				padding: "10px"
			}}>
				<input placeholder='add todo...' onChange = {e => getInputValue(e)} value={text}/>
				<button style={{
					padding: "10px", 
					color: "white", 
					background: "#6e7deb", 
					border: "none", 
					cursor: "pointer"
				}} 
				onClick={
					() => addTodo()
				}>Add</button>
			</div>
		)
	}
}

