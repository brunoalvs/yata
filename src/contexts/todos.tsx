'use client'
import { createContext, useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

import type { Task } from '@/models/task'
import type { Collection } from '@/models/collection'

type TodosContextType = {
  lists: Collection[]
  todos: Task[]
}

export const TodosContext = createContext<TodosContextType>({
  lists: [],
  todos: []
})

interface TodosProviderProps {
  children: React.ReactNode
}

const defaultLists: Collection[] = [
  { id: '001ab', title: 'Today', items: [] },
  { id: '002ab', title: 'All', items: [] },
  { id: '003ab', title: 'Tasks', items: [] },
]

export const TodosProvider = ({ children }: TodosProviderProps) => (
  <TodosContext.Provider
    value={{
      lists: defaultLists,
      todos: []
    }}
  >
    { children }
  </TodosContext.Provider>
)

export const useTodos = () => useContext(TodosContext)
