import React, { createContext, useReducer, useContext } from "react";

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      console.log("삭제할 ID:", action.id);
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

function useTodoState() {
  return useContext(TodoStateContext);
}
function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export { useTodoState, useTodoDispatch };
