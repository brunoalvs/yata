import type { Task } from './task'

export interface Collection {
  id: string
  title: string
  items: Task['id'][] | []
  createdAt: string
  updatedAt: string
}
