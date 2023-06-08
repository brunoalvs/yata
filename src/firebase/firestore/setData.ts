import firebaseApp from '@/firebase/credentials'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
import { type FirebaseError } from 'firebase-admin'
import { type Collection } from '@/models/collection'

const db = getFirestore(firebaseApp)

const setData = async ({
  author,
  title,
}: {
  author: Collection['author']
  title: Collection['title']
}) => {
  let result = null
  let error = null

  const collection: Collection = {
    id: Math.random().toString(36).substring(2, 9),
    title,
    items: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author,
  }
  try {
    await setDoc(doc(db, 'collections', collection.id), collection).then(() => {
      console.log('Document written with ID: ', collection.id)
    })

    result = collection
  } catch (err) {
    const { code }: FirebaseError = err as FirebaseError
    error = code
  }

  return {
    result,
    error,
  }
}

export default setData
