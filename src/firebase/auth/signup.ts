import firebaseApp from '@/firebase/credentials'
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth'
import { type FirebaseError } from 'firebase-admin'

const auth = getAuth(firebaseApp)

export const signupWithEmailAndPassword = async (
  email: string,
  password: string,
  userName: string,
) => {
  let result = null
  let error = null

  try {
    result = await createUserWithEmailAndPassword(auth, email, password)
    // updateProfile with displayName
    try {
      await updateProfile(result.user, { displayName: userName })
    } catch (err) {
      const { code }: FirebaseError = err as FirebaseError
      error = code
    }
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
