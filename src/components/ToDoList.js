import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, completeTodo, deleteTodo, editTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <ToDoItem key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
      ))}
    </div>
  );
}

export default ToDoList;
