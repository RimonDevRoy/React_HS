import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
  // This will be present at the time of initial render.
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    updateTodo: (state, action) => {
      state.todos.forEach((todo) => (
        todo.id === action.payload.id ? todo.text = action.payload.text : todo.text
      ))
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
// It could be that 'default' exports can be renamed as wish while importing in other files. In store.js, the above default export is imported as 'todoReducer'. 
