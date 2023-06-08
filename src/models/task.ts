import type { Collection } from './collection'

export interface Task {
  id: string
  title: string
  collection?: Collection['id']
  completed: boolean
  steps: Task[]
  dueDate?: string
  createdAt: string
  updatedAt: string
}
