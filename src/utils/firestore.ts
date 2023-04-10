import { getFirestore } from 'firebase/firestore'
import firebaseApp from '@/utils/firebase'

export const db = getFirestore(firebaseApp)
