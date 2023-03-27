import type { Dispatch } from 'react'
import { useState, useEffect, createContext, useContext } from 'react'
import { createFirebaseApp } from '@/utils/firebase/clientApp'
import type { User } from 'firebase/auth'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

type UserContextType = {
  user: User
  setUser: Dispatch<User>
  loadingUser: boolean
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  loadingUser: true
})

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null)
  const [loadingUser, setLoadingUser] = useState(true)

  useEffect(() => {
    const app = createFirebaseApp()
    const auth = getAuth(app)
    const unsubscribe = onAuthStateChanged(auth, async (user: User) => {
      try {
        if (!user) {
          setUser(null)
          return
        }

        const { uid, displayName, email, photoURL } = user
        setUser({ uid, displayName, email, photoURL })

      } catch (error) {
        // Most likely a connection error. Handle appropriately.
        console.error(error)
      } finally {
        setLoadingUser(false)
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      { children }
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
