import { React, useState } from "react";
import "../stylesheets/ToDoItem.css";

function ToDoItem({ todo, index, completeTodo, deleteTodo, editTodo }) {
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
    console.log(e.value);
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
