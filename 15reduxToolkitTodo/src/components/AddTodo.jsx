import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, isTodoEditableToggler } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const [editInput, setEditInput] = useState("");
  const dispatch = useDispatch();
  const todoIds = useSelector(state => state.todoIds)
  const isAnyTodoEditable = useSelector(state => state.isAnyTodoEditable)

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const EditTodoHandler = (e) => {
    e.preventDefault()
    // dispatch(updateTodo({id: ((useSelector(state => state.todoIds))[0]), text: editInput}))
    // dispatch(updateTodo({id: (useSelector(state => state.todoIds))[0], text: editInput}))
    dispatch(updateTodo({id: todoIds[0], text: editInput}))
    setEditInput("")
    // dispatch(isTodoEditableToggler(((useSelector(state => state.todoIds))[0])))
    // dispatch(isTodoEditableToggler((useSelector(state => state.todoIds))[0]))
    dispatch(isTodoEditableToggler(todoIds[0]))

    /* Didn't understand why the above 4 lines did not work */
  }

  return (
    <form onSubmit={isAnyTodoEditable ? EditTodoHandler : addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder={isAnyTodoEditable ? "Edit here..." : "Enter a Todo..."}
        value={isAnyTodoEditable ? editInput : input}
        onChange={isAnyTodoEditable ? (e) => setEditInput(e.target.value) : (e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {isAnyTodoEditable ? "Update" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
