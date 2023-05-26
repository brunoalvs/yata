import type { Task } from './task'

export interface Collection {
  id: string
  title: string
  items: Array<Task['id']> | []
  createdAt: string
  updatedAt: string
  author: string
}
