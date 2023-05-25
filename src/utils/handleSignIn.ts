import { signIn } from 'next-auth/react'

export function handleSignIn(provider: string) {
  signIn(provider).catch((error) => {
    console.error(
      `An error occurred while authenticating with ${provider}:`,
      error,
    )
  })
}
