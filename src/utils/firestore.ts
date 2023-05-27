import { getFirestore } from 'firebase/firestore'
import firebaseApp from '@/firebase/credentials'

export const db = getFirestore(firebaseApp)
