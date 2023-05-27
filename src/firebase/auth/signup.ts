import firebaseApp from '@/firebase/credentials'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { type FirebaseError } from 'firebase-admin'

const auth = getAuth(firebaseApp)

export const signupWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  let result = null
  let error = null

  try {
    result = await createUserWithEmailAndPassword(auth, email, password)
  } catch (err) {
    const { code }: FirebaseError = err as FirebaseError
    error = code
  }

  return {
    result,
    error,
  }
}

export default signupWithEmailAndPassword
