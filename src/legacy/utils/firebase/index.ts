import admin from './nodeApp'
import { createFirebaseApp } from './clientApp'
import { getAuth } from 'firebase/auth'

export const firebaseApp = createFirebaseApp()
export const firestore = admin.firestore()

export const auth = getAuth(firebaseApp)
