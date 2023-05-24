import { useState } from 'react'
import type { Task } from '@/models/task'

export interface ITasks {
  tasks: Task[]
  addTask: (task: Task) => void
  removeTask: (id: string) => void
  updateTask: (id: string, updates: Partial<Task>) => void
}

export const useTasks = (): ITasks => {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task])
  }

  const removeTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, ...updates } : task)))
  }

  return { tasks, addTask, removeTask, updateTask }
}
