'use client'

import { redirect } from 'next/navigation'
import { useSession, getProviders } from 'next-auth/react'

export default function SignIn () {
  const { status } = useSession()
  const providers = getProviders()

  console.log(providers)

  if (status === 'loading') {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <div>
        <h1>Sign In</h1>
        <p>You are not signed in.</p>
        <button>
          Sign In
        </button>
      </div>
    )
  }

  if (status === 'authenticated') {
    redirect('/app')
  }

  return (
    <div>
      <h1>Redirecting...</h1>
      <p>You are already signed in.</p>
    </div>
  )
}
