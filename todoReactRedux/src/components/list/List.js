import { useSelector } from 'react-redux';
import { selectTodoItems } from '../../redux/todoItems';
import Todo from '../todo/Todo';

export default function List() {
	const todoList = useSelector(selectTodoItems);
		return (
			<div style={{
				width: "270px"
			}}>
				{todoList.map(item => <Todo key={item.id} item={item}/>)}
			</div>
		)
}
