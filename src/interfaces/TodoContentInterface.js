import React from "react";
import { useTodos } from "../logic-hooks";
import { TodoTitle, TodoDescription } from "../components";

export function TodoContentInterface() {
  const { currentTodo } = useTodos();

  return (
    currentTodo && (
      <>
        <TodoTitle>{currentTodo.title}</TodoTitle>
        <TodoDescription>{currentTodo.description}</TodoDescription>
      </>
    )
  );
}
