import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

    /*
    In the above code, an individual todo was not deleted from the array rather a new array with the other todos were made. This is done for better optimization because if we remove a todo from the array, it will become holey which very less optimized kind of array.
    */
  };

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) =>
      prev.map(
        (prevTodo) =>
          prevTodo.id === id
            ? { ...prevTodo, completed: !prevTodo.completed }
            : prevTodo
        /*
        In the situations like the ones above, we can use '!' to alter between the previous state and new state of boolean.
        */
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("nono"));
    console.log(todos)
    console.log(localStorage.getItem("nono"))

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
