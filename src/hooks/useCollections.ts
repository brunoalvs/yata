import { useState } from 'react'
import type { Collection } from '@/models/collection'

interface Collections {
  collections: Collection[],
  addCollection: (title: string) => void,
  removeCollection: (id: string) => void,
  updateCollection: (id: string, updates: Partial<Collection>) => void,
}

export const useCollections = (): Collections => {
  const [collections, setCollections] = useState<Collection[]>([
    { id: '2', title: 'All', items: [] },
    { id: '3', title: 'Tasks', items: [] },
  ])

  const addCollection = (title: Collection['title']) => {
    const collection = {
      id: Math.random().toString(36).substring(2, 9),
      title,
      items: [],
    }

    setCollections((prevCollections) => [...prevCollections, collection])
  }

  const removeCollection = (id: string) => {
    setCollections((prevCollections) => prevCollections.filter((collection) => collection.id !== id))
  }

  const updateCollection = (id: string, updates: Partial<Collection>) => {
    setCollections((prevCollections) => prevCollections.map((collection) => (collection.id === id ? { ...collection, ...updates } : collection)))
  }

  return { collections, addCollection, removeCollection, updateCollection }
}
