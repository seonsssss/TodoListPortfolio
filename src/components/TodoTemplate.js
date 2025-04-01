import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoTemplate() {
  return (
    <div
      style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}
    >
      <h2>📝 투두 리스트</h2>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default TodoTemplate;
