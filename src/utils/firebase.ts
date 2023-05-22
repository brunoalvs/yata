import { initializeApp, getApps } from 'firebase/app'

interface FirebaseCredentials {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
  measurementId?: string
}

const firebaseCredentials: FirebaseCredentials = {
  apiKey: process.env.FIREBASE_API_KEY ?? '',
  authDomain: process.env.FIREBASE_AUTH_DOMAIN ?? '',
  projectId: process.env.FIREBASE_PROJECT_ID ?? '',
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET ?? '',
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID ?? '',
  appId: process.env.FIREBASE_APP_ID ?? '',
  measurementId: process.env.FIREBASE_MEASUREMENT_ID ?? '',
}

const firebaseApp = getApps().length === 0 ? initializeApp(firebaseCredentials) : getApps()[0]

export default firebaseApp
