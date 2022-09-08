import React, { Component } from 'react'

export default class Footer extends Component {
	render() {
		const { length, completed, clearCompleted } = this.props
		return (
			<div style={{
				display: "flex", 
				width: "250px", 
				justifyContent: "space-between", 
				background: "#639edb", 
				alignItems: "center", 
				padding: "10px", 
				color: "white"
			}}>
				<div style={{
					display: "flex", 
					justifyContent: "center"
				}}>
					{length}/{completed} completed
				</div>
				<button style={{
					border: "none", 
					padding: "10px", 
					color: "white", 
					background: "#f27349", 
					cursor: "pointer"}} 
					onClick={
						() => clearCompleted()
					}>Clear Completed</button>
			</div>
		)
	}
}
