import { createContext, useContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth'
import firebaseApp from '@/firebase/credentials'
import LoadingScreen from '@/components/templates/LoadingScreen'

const auth = getAuth(firebaseApp)

interface AuthContextType {
  user: User | null
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthContextProvider')
  }

  return context
}

interface AuthContextProviderProps {
  children: React.ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <LoadingScreen /> : children}
    </AuthContext.Provider>
  )
}
