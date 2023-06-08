import { createContext, useContext, useState } from 'react'

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
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: Math.random().toString(36).substring(2, 9),
      title: 'Task 1',
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      steps: [],
    },
    {
      id: Math.random().toString(36).substring(2, 9),
      title: 'Task 2',
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      steps: [],
    },
  ])
  const [collections, setCollections] = useState<Collection[]>([
    {
      id: Math.random().toString(36).substring(2, 9),
      title: 'Collection 1',
      author: 'daRPfcUVPVXvo74BK8nOeIm33B02',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      items: [],
    },
    {
      id: Math.random().toString(36).substring(2, 9),
      title: 'Collection 2',
      author: 'daRPfcUVPVXvo74BK8nOeIm33B02',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      items: [],
    },
    {
      id: Math.random().toString(36).substring(2, 9),
      title: 'Collection 3',
      author: 'daRPfcUVPVXvo74BK8nOeIm33B02',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      items: [],
    },
    {
      id: Math.random().toString(36).substring(2, 9),
      title: 'Collection 4',
      author: 'daRPfcUVPVXvo74BK8nOeIm33B02',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      items: [],
    },
    {
      id: Math.random().toString(36).substring(2, 9),
      title: 'Collection 5',
      author: 'daRPfcUVPVXvo74BK8nOeIm33B02',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      items: [],
    },
    {
      id: Math.random().toString(36).substring(2, 9),
      title: 'Collection 6',
      author: 'daRPfcUVPVXvo74BK8nOeIm33B02',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      items: [],
    },
    {
      id: Math.random().toString(36).substring(2, 9),
      title: 'Collection 7',
      author: 'daRPfcUVPVXvo74BK8nOeIm33B02',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      items: [],
    },
    {
      id: Math.random().toString(36).substring(2, 9),
      title: 'Collection 8',
      author: 'daRPfcUVPVXvo74BK8nOeIm33B02',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      items: [],
    },
  ])

  return (
    <TaskContext.Provider value={{ tasks, collections }}>
      {children}
    </TaskContext.Provider>
  )
}
