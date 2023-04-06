'use client'
import { createContext, useContext, useState } from 'react'

type Todo = {
  id: string
  title: string
}

type TodosContextType = {
  todos: Todo[]
  addTodo: (todo: Todo) => void
  removeTodo: (id: string) => void
  updateTodo: (id: string, title: string) => void
}

export const TodosContext = createContext<TodosContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  updateTodo: () => {},
})

export const TodosProvider = ({ children }: { children: React.ReactNode}) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo])
  }

  const removeTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const updateTodo = (id: string, title: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, title } : todo))
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        updateTodo
      }}
    >
      { children }
    </TodosContext.Provider>
  )
}

export const useTodos = () => useContext(TodosContext)
