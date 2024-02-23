// store.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice'; // Import your todos reducer

const store = configureStore({
    reducer: {
        todos: todosReducer, // Add your todos reducer to the root reducer
        // Other reducers can be added here if needed
    },
});

export default store;
