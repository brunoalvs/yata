import { createContext } from 'react'
import { useTasks } from '@/hooks/useTasks'
import { useCollections } from '@/hooks/useCollections'

interface ITaskContext {
  tasks: ReturnType<typeof useTasks>
  collections: ReturnType<typeof useCollections>
}

const defaultTaskContext: ITaskContext = {
  tasks: {
    tasks: [],
    addTask: () => {
      throw new Error('addTask was not initialized')
    },
    updateTask: () => {
      throw new Error('updateTask was not initialized')
    },
    removeTask: () => {
      throw new Error('removeTask was not initialized')
    },
  },
  collections: {
    collections: [],
    addCollection: () => {
      throw new Error('addCollection was not initialized')
    },
    updateCollection: () => {
      throw new Error('updateCollection was not initialized')
    },
    removeCollection: () => {
      throw new Error('removeCollection was not initialized')
    },
    getCollections: () => {
      throw new Error('getCollections was not initialized')
    },
  }
}

export const TaskContext = createContext<ITaskContext>(defaultTaskContext)

interface TaskProviderProps {
  children: React.ReactNode
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const tasks = useTasks()
  const collections = useCollections()

  return (
    <TaskContext.Provider value={{ tasks, collections }}>
      {children}
    </TaskContext.Provider>
  )
}
