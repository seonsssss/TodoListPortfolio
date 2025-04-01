import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  return (
    <TodoProvider>
      <TodoTemplate />
    </TodoProvider>
  );
}

export default App;
