import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import AddToDoForm from "./components/AddToDoForm";
import "./stylesheets/App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
