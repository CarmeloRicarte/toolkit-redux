import { useState } from "react";
import { Todo, useGetTodosQuery, useGetTodoByIdQuery } from "./store/apis";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  //const { data: todos = [], isLoading } = useGetTodosQuery("");
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>TODOs - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? "True" : "False"}</h4>

      <pre>{JSON.stringify(todo)}</pre>
      {/* <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "DONE" : "Pending"}</strong> -{" "}
            {todo.title}
          </li>
        ))}
      </ul> */}
      <button type="button" onClick={prevTodo}>
        Previous TODO
      </button>
      <button type="button" onClick={nextTodo}>
        Next TODO
      </button>
    </>
  );
};
