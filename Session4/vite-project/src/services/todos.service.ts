import * as todosApi from '../api/todos.api'
import type { Todo } from '../types/todo.types';

export async function listTodos(): Promise<Todo[]> {
  const data = await todosApi.getTodos();

  return data
}