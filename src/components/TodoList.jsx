import React from "react"
import NewTodoForm from "./NewTodoForm.jsx";
import TodoListItem from "./TodoListItem.jsx";
import "../styles/TodoList.css";

const TodoList = ({ todos = [] }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </div>
);

export default TodoList;
