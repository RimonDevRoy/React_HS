import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
  todos: [{ id: nanoid(), text: "Hello world", isTodoEditable: false }],
  todoIds: [],
  isAnyTodoEditable: false
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
        isTodoEditable: false
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

    isTodoEditableToggler: (state, action) => {

      if (!(state.todoIds.includes(action.payload))) {
        state.todoIds.push(action.payload)
      } else if (state.todoIds.includes(action.payload)) {
        state.todoIds = state.todoIds.filter((todoId) => todoId !== action.payload)
      }

      state.todos.forEach(todo => {
        if (todo.id === action.payload) todo.isTodoEditable = !todo.isTodoEditable
      });
        
      // let isEditable = state.todos.filter((todo) => todo.isTodoEditable === true)

      // let isNotEditable = state.todos.filter((todo) => todo.isTodoEditable === false)

      // if (isEditable.length >= 1) state.isAnyTodoEditable = true
      // if (isNotEditable.length >= 1) state.isAnyTodoEditable = false

      /*
      The above code of 'isAnyTodoEditable' check has made me realize a big lesson!!!
      The lesson is: Always visualize every line of code you are writing in a notepaper with diagrams of the actions that the code will execute. Such as: here, 'isEditable' and 'isNotEditable' will co-exist and will interfere in actual intention od code with their 'length'.
      Here, even if a single todo was editable, it was increasing the length of 'isEditable', but the rest of the non-editable todos were also making up the length of 'isNotEditable'. Thus, at the end 'isAnyTodoEditable' was assigned false until all the todos were editable.
      You should try the code below with either only 'isEditable' or 'isNotEditable'.
      */

      // let isEditable = state.todos.filter((todo) => todo.isTodoEditable === true)

      // if (isEditable.length >= 1) {
      //   state.isAnyTodoEditable = true
      // } else if (isEditable.length === 0){
      //   state.isAnyTodoEditable = false
      // }

      // or for better optimization,

      if ((state.todos.filter((todo) => todo.isTodoEditable === true)).length >= 1) {
        state.isAnyTodoEditable = true
      } else {
        state.isAnyTodoEditable = false
      }
    },

  },
});

export const { addTodo, updateTodo, removeTodo, isTodoEditableToggler } = todoSlice.actions;

export default todoSlice.reducer;
// It could be that 'default' exports can be renamed as wish while importing in other files. In store.js, the above default export is imported as 'todoReducer'. 
