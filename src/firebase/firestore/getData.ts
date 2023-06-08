import firebaseApp from '@/firebase/credentials'
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import { type FirebaseError } from 'firebase-admin'
// import { type Collection } from '@/models/collection'

const db = getFirestore(firebaseApp)

const getData = async () => {
  let result = null
  let error = null

  try {
    result = await getDocs(collection(db, 'collections'))

    console.log(
      'collections',
      result.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
    )
  } catch (err) {
    const { code }: FirebaseError = err as FirebaseError
    error = code
  }

  return {
    result,
    error,
  }
}

export default getData
