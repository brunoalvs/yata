/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { useEffect, useState } from 'react'
import type { Collection } from '@/models/collection'

import firebaseApp from '@/firebase/credentials'
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  collection,
} from 'firebase/firestore'

export interface ICollections {
  collections: Collection[]
  getCollections: () => void
  addCollection: ({
    title,
    author,
  }: {
    title: Collection['title']
    author: Collection['author']
  }) => void
  removeCollection: (id: string) => void
  updateCollection: (id: string, updates: Partial<Collection>) => void
}

const db = getFirestore(firebaseApp)

export const useCollections = (): ICollections => {
  const [collections, setCollections] = useState<Collection[]>([])

  const getCollections = async () => {
    const collections = await getDocs(collection(db, 'collections'))
    console.log(
      'collections',
      collections.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as Collection),
      ),
    )
    setCollections(
      collections.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as Collection),
      ),
    )
  }

  const addCollection = async ({
    title,
    author,
  }: {
    title: Collection['title']
    author: Collection['author']
  }) => {
    const collection: Collection = {
      id: Math.random().toString(36).substring(2, 9),
      title,
      items: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      author,
    }

    await setDoc(doc(db, 'collections', collection.id), collection)

    setCollections((prevCollections) => [...prevCollections, collection])
  }

  const removeCollection = (id: string) => {
    setCollections((prevCollections) =>
      prevCollections.filter((collection) => collection.id !== id),
    )
  }

  const updateCollection = (id: string, updates: Partial<Collection>) => {
    setCollections((prevCollections) =>
      prevCollections.map((collection) =>
        collection.id === id ? { ...collection, ...updates } : collection,
      ),
    )
  }

  useEffect(() => {
    getCollections()
  }, [])

  return {
    collections,
    getCollections,
    addCollection,
    removeCollection,
    updateCollection,
  }
}
