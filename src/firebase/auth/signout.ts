import { type FirebaseError } from 'firebase-admin'
import { getAuth, signOut as FirebaseSignOut } from 'firebase/auth'
import firebaseApp from '../credentials'

const auth = getAuth(firebaseApp)

export const signOut = async () => {
  FirebaseSignOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('Sign-out successful.')
    })
    .catch((error) => {
      // An error happened.
      const { code }: FirebaseError = error as FirebaseError
      console.error(code)
    })
}

export default signOut
