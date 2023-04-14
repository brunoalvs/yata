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
