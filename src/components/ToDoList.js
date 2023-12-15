import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, completeTodo, deleteTodo, editTodo }) {
  /**
   * The ToDoList component is responsible for rendering the list of to-do items.
   * It receives the array of to-do items and related functions (like delete and edit) as props
   * from the App component. This component iterates over the to-do items and renders
   * each one using the ToDoItem component. It acts as a bridge between the App component
   * and individual ToDoItem components, passing down the necessary data and functions
   * to each ToDoItem for further actions like editing, completing, or deleting to-dos.
   */

  return (
    <div>
      {todos.map((todo, index) => (
        <ToDoItem key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
      ))}
    </div>
  );
}

export default ToDoList;
