import React, { useState } from "react";
import "../stylesheets/AddTodoForm.css";

function AddToDoForm({ addTodo }) {
  /**
   * The AddToDoForm component is responsible for providing a user interface
   * to add new to-do items to the list. It features a form with an input field
   * for entering the to-do text and a submission button. When the form is submitted,
   * it triggers a function passed down as a prop from the App component to add
   * the new to-do item to the state. This component ensures the separation of concerns
   * by handling only the addition of new to-dos and delegating the state management
   * and rendering of the to-do list to other components.
   */

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
