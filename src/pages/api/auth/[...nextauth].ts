import type { NextAuthOptions, Session } from 'next-auth'
import type { AdapterUser } from 'next-auth/adapters'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import { FirestoreAdapter } from '@next-auth/firebase-adapter'
import { firestore } from '@/lib/firestore'

export const authOptions: NextAuthOptions = {
  adapter: FirestoreAdapter(firestore),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    })
  ],
  callbacks: {
    session: async ({ session, user }: { session: Session, user: AdapterUser }) => {
      if ((session?.user) != null) {
        session.user.id = user.id
      }
      return await Promise.resolve(session)
    }
  },
  secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)
