import type { Collection } from './collection'
import type { Task } from './task'

export interface IUser {
  id: string
  name: string
  email: string
  photoUrl: string
  collections: Collection[]
  tasks: Task[]
}

// Create a class using the interface
export class User implements IUser {
  id: string
  name: string
  email: string
  photoUrl: string
  collections: Collection[]
  tasks: Task[]

  constructor(
    id: string,
    name: string,
    email: string,
    photoUrl: string,
    collections: Collection[],
    tasks: Task[]
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.photoUrl = photoUrl
    this.collections = collections
    this.tasks = tasks
  }

  getUserData() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      photoUrl: this.photoUrl,
    }
  }

  getCollections() {
    return this.collections
  }

  getTasks() {
    return this.tasks
  }
}
