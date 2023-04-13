import type { Task } from './task'
import type { Collection } from './collection'

// Extra
interface IGroup {
  id: string
  name: string
  items: string[]
}

interface IUser {
  id: string
  name: string
  email: string
  photoUrl: string
  tasks: Task[]
  collections: Collection[]
  groups: IGroup[]
}

type Data = {
  users: IUser[]
}

const data: Data = {
  users: [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@email.com',
      photoUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      tasks: [
        {
          id: 'task1',
          title: 'Task 1',
          completed: false,
          steps: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      collections: [
        {
          id: 'col1',
          title: 'Collection 1',
          items: ['task1'],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
      ],
      groups: [
        {
          id: 'group1',
          name: 'Group 1',
          items: ['col1'],
        }
      ],
    },
  ]
}

export const result = data.users.find(user => user.id === '1')
