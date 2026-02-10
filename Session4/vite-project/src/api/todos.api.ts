import type { Todo } from "../types/todo.types";
import axiosClient from "./axiosClient";

export async function getTodos(): Promise<Todo[]> {
  const todos = await axiosClient.get('https://jsonplaceholder.typicode.com/todos')

  return todos.data
}