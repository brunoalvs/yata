type Task = {
  id: string
  title: string
  completed: boolean
  createdAt: Date
  updatedAt: Date
}

type Collection = {
  id: string
  title: string
  items: Task[]
}

type Todo = Task & {
  steps: Task[]
  dueDate?: string
}

type TodoCollection = Collection & {
  items: Todo[]
}

import { randomUUID } from 'crypto'

export const List: TodoCollection = {
  id: randomUUID(),
  title: 'My Lists',
  items: [{
    id: randomUUID(),
    title: 'My Todo',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    steps: []
  }],
}
