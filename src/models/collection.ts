import type { Task } from './task'

export interface Collection {
  id: string
  title: string
  items: Array<Task['id']> | []
  author: string
  createdAt: string
  updatedAt: string
}
