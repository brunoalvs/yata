'use client'

import { createContext, useContext, useState } from 'react'

type SessionContextType = {
  user?: {
    name: string
    email: string
  }
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

export const SessionContext = createContext<SessionContextType>({
  user: undefined,
  signIn: async () => {},
  signOut: async () => {}
})

export const SessionProvider = ({ children }: { children: React.ReactNode}) => {
  const [user, setUser] = useState<SessionContextType['user']>(undefined)

  const signIn = async () => {
    console.log('Signing in...')
    setUser({
      name: 'John Doe',
      email: 'email@email.com'
    })
  }
  const signOut = async () => {
    console.log('Signing out...')
  }

  return (
    <SessionContext.Provider
      value={{
        user,
        signIn,
        signOut
      }}>
      { children }
    </SessionContext.Provider>
  )}

export const useSession = () => useContext(SessionContext)
