import { React, useState } from "react";
import "../stylesheets/ToDoItem.css";

function ToDoItem({ todo, index, completeTodo, deleteTodo, editTodo }) {
  /**
   * The ToDoItem component represents a single to-do item within the to-do list.
   * It is responsible for displaying the individual to-do item's content and
   * providing options for user interaction. This includes buttons for editing,
   * completing, and deleting the to-do item. Each ToDoItem receives its data
   * and functions for these actions as props from the ToDoList component.
   * The component renders the to-do's text and conditionally displays either
   * the editable input field or the standard text view based on the current state.
   */

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editText) return;
    editTodo(index, editText);
    setIsEditing(false);
  };

  const todoClasses = `todo ${todo.isCompleted ? "completed" : "not-completed"}`;

  return (
    <div className={todoClasses} style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {isEditing ? (
        <form className="edit-form" onSubmit={handleSubmit}>
          <input type="text" value={editText} onChange={handleChange} />
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel} className="cancel-btn">
            Cancel
          </button>
        </form>
      ) : (
        <>
          {todo.text}
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => completeTodo(index)}>{todo.isCompleted ? "Re-Add" : "Complete"}</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ToDoItem;
