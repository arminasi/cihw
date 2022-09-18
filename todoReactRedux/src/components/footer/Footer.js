import { useDispatch, useSelector } from "react-redux"
import { clearCompleted, selectTodoItems } from "../../redux/todoItems"

export default function Footer () {
		
		const dispatch = useDispatch()

		const list = useSelector(selectTodoItems);

		const isCompletedLength = list.filter(item => item.isCompleted === true).length

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
						{list.length === 0 ? "Empty list" : list.length} / {isCompletedLength === 0 ? "0" : isCompletedLength}
				</div>
				<button style={{
					border: "none", 
					padding: "10px", 
					color: "white", 
					background: "#f27349", 
					cursor: "pointer"}} 
					onClick={
						() => dispatch(clearCompleted())
					}>Clear Completed</button>
			</div>
		)
}
