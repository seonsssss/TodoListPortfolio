import React, { useState } from "react";
import { useTodoDispatch } from "../context/TodoContext";

function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useTodoDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: "CREATE", todo: { id: Date.now, text, done: false } });
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;
