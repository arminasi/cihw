import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../redux/todoItems'
import { selectTodoName, setTodoName } from '../../redux/todoName'

export default function Header() {

	const dispatch = useDispatch()

	const text = useSelector(selectTodoName)

	return (
		<div style={{
			display: "flex", 
			width: "250px", 
			justifyContent: "space-between", 
			background: "#639edb", 
			alignItems: "center", 
			padding: "10px"
		}}>
			<input placeholder='add todo...' onChange = {(e) => dispatch(setTodoName(e.target.value))} value={text}/>
			<button style={{
				padding: "10px", 
				color: "white", 
				background: "#6e7deb", 
				border: "none", 
				cursor: "pointer"
			}} 
			onClick={
				() => {
					dispatch(addTodo(text));
					dispatch(setTodoName(""));
				}
			}>Add</button>
		</div>
	)
}


