'use client'

import { redirect } from 'next/navigation'
// import { useSession } from 'next-auth/react'
// import { signIn } from 'next-auth/react'

import { useSession } from '@/hooks/useSession'

export default function SignIn () {
  // const { status, data} = useSession()
  const { status, signIn, signUp } = useSession()

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
        <button
          onClick={ () => signIn() }
        >
          Sign In
        </button>
        <button onClick={ () => signUp() }>
          Sign Up
        </button>
      </div>
    )
  }

  if (status === 'authenticated') {
    return (
      <>
        { redirect('/app') }
        <div>
          <h1>Redirecting...</h1>
          <p>You are already signed in.</p>
        </div>
      </>
    )

  }
}
