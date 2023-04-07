import { randomUUID } from 'node:crypto'
import type { Collection } from './collection'

export interface Task {
  id: string
  title: string
  completed: boolean
  steps: Task[]
  createdAt: Date
  updatedAt: Date
  dueDate?: string
  collection?: Collection['id']
}

export function createTask(title: string): Task {
  return {
    id: randomUUID(),
    title,
    completed: false,
    steps: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}
