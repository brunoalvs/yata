import * as NextAuth from 'next-auth/react'
import { getFirestore, setDoc, doc } from  'firebase/firestore'
// import { db } from '@/utils/firestore'
import firebaseApp from '@/utils/firebase'

interface ISession {
  status: 'authenticated' | 'unauthenticated' | 'loading'
  signIn: () => void
  signUp: () => void
  user?: {
    email: string
    name: string
    image: string
  }
}

const db = getFirestore(firebaseApp)

export const useSession = (): ISession => {
  const { data, status } = NextAuth.useSession()
  const user = {
    email: data?.user?.email ?? '',
    name: data?.user?.name ?? '',
    image: data?.user?.image ?? '',
  }

  const signIn = () => {
    NextAuth.signIn()
  }

  const signUp = async () => {
    const { email, name, image } = user
    await setDoc(doc(db, 'users', email), {
      email,
      name,
      image,
    })
  }

  return {
    user,
    status,
    signIn,
    signUp,
  }
}
