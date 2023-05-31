import { createContext, useContext } from 'react'

import { type Task } from '@/models/task'
import { type Collection } from '@/models/collection'

interface TaskContextType {
  tasks: Task[]
  collections: Collection[]
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const useTaskContext = () => {
  const context = useContext(TaskContext)

  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskContextProvider')
  }

  return context
}

interface TaskContextProviderProps {
  children: React.ReactNode
}

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  console.count('TaskContextProvider')

  return (
    <TaskContext.Provider value={{ tasks: [], collections: [] }}>
      {children}
    </TaskContext.Provider>
  )
}
