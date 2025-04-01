import React from "react";
import { useTodoDispatch } from "../context/TodoContext";

function TodoItem({ id, text, done }) {
  const dispatch = useTodoDispatch();

  const toggleTodo = () => dispatch({ type: "TOGGLE", id });
  const removeTodo = () => dispatch({ type: "REMOVE", id });

  return (
    <li>
      <span
        onClick={toggleTodo}
        style={{
          textDecoration: done ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {text}
      </span>
      <button onClick={removeTodo} style={{ marginLeft: "10px" }}>
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
