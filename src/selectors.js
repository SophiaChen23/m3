// selectors.js
export const selectTodoById = (state, todoId) => {
    return state.todos.find((todo) => todo.id === todoId);
};


// ERROR
// state.todos.find is not a function
// TypeError: state.todos.find is not a function


// export const selectTodoById = (state, todoId) => {
//     // Check if state.todos is an array before using the find method
//     if (Array.isArray(state.todos)) {
//         return state.todos.find((todo) => todo.id === todoId);
//     }
//
//     // Handle the case where state.todos is not an array (e.g., return null or handle the error as needed)
//     return null; // You can customize this based on your application's requirements
// };

// selectors.js

// Select all todos from the Redux state
export const selectTodos = (state) => state.todos;

// Select a specific todo by ID
export const selectTodoById = (state, todoId) => {
    return state.todos.find((todo) => todo.id === todoId);
};

// Select completed todos
export const selectCompletedTodos = (state) => {
    return state.todos.filter((todo) => todo.completed);
};

// Select active todos
export const selectActiveTodos = (state) => {
    return state.todos.filter((todo) => !todo.completed);
};

