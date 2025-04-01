import React from "react";
import { useTodoState } from "../context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useTodoState();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </ul>
  );
}

export default TodoList;
