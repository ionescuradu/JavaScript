import CarTable from "../components/CarTable"
import { useCallback, useEffect, useState } from "react"
import { listTodos } from "../services/todos.service"
import type { Todo } from "../types/todo.types"

function Dashboard () {
  const [todos, setTodos] = useState<Todo[]>([])

  const cars = [
    { id: "1", name: 'Audi' },
    { id: "2", name: 'Bentley'}
  ]

  const onDelete = (id) => {
    console.log("Deleted id: ", id)
  }

  const loadTodos = useCallback(async () => {
    const todos = await listTodos()
    console.log("TODOS: ", todos)

    setTodos(todos)
  }, [])

  useEffect(() => {
    loadTodos()
  }, [])



  return <div>
    <h1>Dashboard</h1>
    <p>Un tablou de bord</p>

    {
      todos.length
    }

    <CarTable cars={cars} onDelete={onDelete}/>
  </div>
}

export default Dashboard