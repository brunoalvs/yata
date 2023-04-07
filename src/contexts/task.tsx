import { createContext } from 'react'
import { useTasks } from '@/hooks/useTasks'
import { useCollections } from '@/hooks/useCollections'

type TaskContextType = {
  tasks: ReturnType<typeof useTasks>
  collections: ReturnType<typeof useCollections>
}

export const TaskContext = createContext<TaskContextType>({} as TaskContextType)

interface TaskProviderProps {
  children: React.ReactNode
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const tasks = useTasks()
  const collections = useCollections()

  return (
    <TaskContext.Provider value={{ tasks, collections }}>
      { children }
    </TaskContext.Provider>
  )
}
