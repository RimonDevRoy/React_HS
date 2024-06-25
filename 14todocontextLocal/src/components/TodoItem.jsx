import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    // Here, todoMsg is written at the end because the last ones override the previous ones.
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    //console.log(todo.id);
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
            // As we press to update the todo, the todoMsg updates the todo. 
          } else setIsTodoEditable((prev) => !prev);
          /*
          The above code of 'isTodoEditable' makes only the editTodo() run when it is true and when it is false it turns into true and makes the todo editable. The editTodo() only updates the todo, but isTodoEditable === true lets us edit the todo and then editTodo() is run only to finalize and save the change.
          */
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
