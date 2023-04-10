import { useState } from 'react'
import type { Collection } from '@/models/collection'

import firebaseApp from '@/utils/firebase'
import { getFirestore, doc, setDoc, getDocs, collection } from 'firebase/firestore'

interface Collections {
  collections: Collection[],
  getCollections: () => void,
  addCollection: (title: string) => void,
  removeCollection: (id: string) => void,
  updateCollection: (id: string, updates: Partial<Collection>) => void,
}

const db = getFirestore(firebaseApp)

export const useCollections = (): Collections => {
  const [collections, setCollections] = useState<Collection[]>([])

  const getCollections = async () => {
    const collections = await getDocs(collection(db, 'collections'))
    console.log(collections.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Collection)))
    setCollections(collections.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Collection)))
  }

  const addCollection = async (title: Collection['title']) => {
    const collection: Collection = {
      id: Math.random().toString(36).substring(2, 9),
      title,
      items: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    await setDoc(doc(db, 'collections', collection.id), collection)

    setCollections((prevCollections) => [...prevCollections, collection])
  }

  const removeCollection = (id: string) => {
    setCollections((prevCollections) => prevCollections.filter((collection) => collection.id !== id))
  }

  const updateCollection = (id: string, updates: Partial<Collection>) => {
    setCollections((prevCollections) => prevCollections.map((collection) => (collection.id === id ? { ...collection, ...updates } : collection)))
  }

  return {
    collections,
    getCollections,
    addCollection,
    removeCollection,
    updateCollection
  }
}
