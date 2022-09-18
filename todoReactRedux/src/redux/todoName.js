import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	name: ""
}

const todoNameSlice = createSlice({
  name: 'todoName',
  initialState,
  reducers: {
		setTodoName(state, action) {
			state.name = action.payload;
		},
	},
})

export const { setTodoName } = todoNameSlice.actions

export function selectTodoName (state){
	return state.todoName.name
} 

export default todoNameSlice.reducer