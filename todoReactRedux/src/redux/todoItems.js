import { createSlice } from '@reduxjs/toolkit'
import { idGenerator } from '../App'

const initialState = {
	items: []
}

export const todoItemsSlice = createSlice({
  name: 'todoItems',
	initialState,
  reducers: {
		addTodo(state, action) {
			state.items.push({title: action.payload, id: idGenerator(), isCompleted: false, priority: 1})
		},
		deleteTodo(state, action) {
			state.items.splice(state.items.findIndex(i => i.id === action.payload), 1)
		},
		toggleTodo(state, action) {
			const index = state.items.findIndex(i => i.id === action.payload)
			const item = state.items.find(i => i.id === action.payload)
			state.items.splice(index, 1, {
				...item,
				isCompleted: !item.isCompleted
			})
		},
		clearCompleted(state) {
			const filtered = state.items.filter(item => item.isCompleted !== true)
			return state = {...state, items: filtered}
		},
		togglePriority(state, action) {
			const index = state.items.findIndex(i => i.id === action.payload.id)
			const item = state.items.find(i => i.id === action.payload.id)
			state.items.splice(index, 1, {
				...item,
				priority: action.payload.priority
			})
		}
	},
})

export function colorSelector(state) {
	return state.todoItems.items
}

export const { addTodo, deleteTodo, toggleTodo, clearCompleted, togglePriority } = todoItemsSlice.actions

export const selectTodoItems = (state) => state.todoItems.items

export default todoItemsSlice.reducer