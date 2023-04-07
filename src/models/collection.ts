import type { Task } from './task'

export interface Collection {
  id: string
  title: string
  items: Task[] | []
}
