import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo, togglePriority } from '../../redux/todoItems'
import { useState } from 'react';

export default function Todo ({item}) {

	const [priority, setPriority] = useState(item.priority)

	const [color] = useState(
		{
			1: "#fac864",
			2: "orange",
			3: "tomato",
		}
	)

	const dispatch = useDispatch()

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
					onChange={() => dispatch(toggleTodo(item.id))}
				/>  
				<div>{item.title}</div>
				<div>
				<select style={{background: color[priority], color: "white", border: "none"}} onChange={(e) => {setPriority(Number(e.target.value)); dispatch(togglePriority({priority, id: item.id}))}}>
					<option value={1}>Low</option>
					<option value={2}>Medium</option>
					<option value={3}>High</option>
				</select>
				</div>
				<button style={{
					border: "none", 
					cursor: "pointer", 
					color: "white", 
					background: "#fac864"
					}}
					onClick={
						() => dispatch(deleteTodo(item.id))
					}>X</button>
			</div>
		)
}
