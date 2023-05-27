import NextAuth, { type Session, type NextAuthOptions } from 'next-auth'
import { type AdapterUser } from 'next-auth/adapters'
import GithubProvider from 'next-auth/providers/github'
// import { FirestoreAdapter } from '@next-auth/firebase-adapter'
// import { firestore } from '@/lib/firestore'

interface CallbackSession {
  session: Session
  user: AdapterUser
}

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  callbacks: {
    session: async ({ session, user }: CallbackSession) => {
      if (session?.user != null) {
        session.user.id = user.id
      }

      return await Promise.resolve(session)
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
