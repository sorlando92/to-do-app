import React, { useState } from "react";
import "../stylesheets/AddTodoForm.css";

function AddToDoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input className="todo-input" type="text" value={value} placeholder="Add a new task" onChange={(e) => setValue(e.target.value)} />
      <button type="submit" className="add-todo-button">
        Add To-Do
      </button>
    </form>
  );
}

export default AddToDoForm;
