import { useState, useContext, useEffect } from "react";
import { StateContext, DispatchContext } from "../contexts";

export function useTodos() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [currentTodo, setCurrentTodo] = useState(null);

  const todos = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  function addTodo() { }

  useEffect(() => {
    if (todos && id) setCurrentTodo(todos.find(v => v.id === id));
  }, [todos, id]);

  return {
    title,
    setTitle,
    description,
    setDescription,
    addTodo,
    todos,
    currentTodo
  };
}
