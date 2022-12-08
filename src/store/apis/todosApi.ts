import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
    getTodoById: builder.query({
      query: (id: number) => `/todos/${id}`,
    }),
  }),
});
// export endpoints as custom hooks for use it in your app
export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;
