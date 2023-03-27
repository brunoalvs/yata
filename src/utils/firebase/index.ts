import admin from './nodeApp'
import { createFirebaseApp } from './clientApp'

export const firebaseApp = createFirebaseApp()
export const auth = admin.auth()
export const firestore = admin.firestore()
