import { useContext } from 'react'

import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { createFirebaseApp } from '@/utils/firebase/clientApp'

import { UserContext, useUser } from '@/contexts/userContext'

export default function Profile() {
  const { user, loadingUser } = useUser()

  const login = () => {
    const firebaseApp = createFirebaseApp()
    const auth = getAuth(firebaseApp)
    signInWithEmailAndPassword(auth, 'email@mailinator.com', '123456')
  }

  const logout = () => {
    const firebaseApp = createFirebaseApp()
    const auth = getAuth(firebaseApp)
    signOut(auth)
  }

  if (loadingUser) {
    return <p>Loading...</p>
  }

  if (!user) {
    return (
      <div style={{ fontSize: '36px' }}>
        <h1>Profile</h1>
        <p>Not logged in</p>
        <button onClick={ login }>Login</button>
      </div>
    )
  }

  return (
    <div style={{ fontSize: '36px' }}>
      <h1>Profile</h1>
      <p>Current user: { user?.email } { user.displayName }</p>
      <button onClick={ logout }>Logout</button>
    </div>
  )
}
