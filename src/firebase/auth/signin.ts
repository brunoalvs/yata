import firebaseApp from '@/firebase/credentials'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { type FirebaseError } from 'firebase-admin'

const auth = getAuth(firebaseApp)

export const signinWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  let result = null
  let error = null

  try {
    result = await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    const { code }: FirebaseError = err as FirebaseError
    error = code
  }

  return {
    result,
    error,
  }
}

export default signinWithEmailAndPassword
