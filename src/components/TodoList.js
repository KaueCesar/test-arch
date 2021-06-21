import React from "react";
import { TodoListItem } from "./";

export function TodoList({ todos }) {
  return (
    <ol>
      <TransitionGroup>
        {todos.map(({ id, title }) => ( 
          Alert.alert('teste')
        ))}
      </TransitionGroup>
    </ol>
  );
}
