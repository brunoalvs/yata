'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import UserInfo from './user-information'

export default function Component() {
  const { data: session } = useSession()

  return (
    <>
      { session ? (
        <button onClick={ () => signOut() }>
          Sign Out
        </button>
      ) : (
        <button onClick={ () => signIn() }>
          Sign In
        </button>
      ) }
      { session && <UserInfo data={ session.user } /> }
    </>
  )
}
