import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import firebaseApp from '@/firebase/credentials'

const db = getFirestore(firebaseApp)

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const getCollections = async () => {
    const collections = await getDocs(collection(db, 'collections'))
    console.log(collections)
    return collections.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  }

  getCollections().then((collections) => {
    res.status(200).json(collections)
  })
}
