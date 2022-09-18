import { configureStore } from '@reduxjs/toolkit';
import todoItems from './todoItems';
import todoName from './todoName';

export default configureStore({
  reducer: {
		todoItems, 
		todoName,
  },
});
