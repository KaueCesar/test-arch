import React from "react";
import { useTodos } from "../logic-hooks";
import { TodoInput, TodoList } from "../components";

export function TodoInterface() {
  const {
    title,
    setTitle,
    description,
    setDescription,
    addTodo,
    todos
  } = useTodos();

  return (
    <>
      <TodoInput />
      <TodoList />
    </>
  );
}
