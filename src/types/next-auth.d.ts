// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth/next'
import type { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user?: {
      id?: string
      name?: string
      email?: string
      image?: string
    }
  }
}
