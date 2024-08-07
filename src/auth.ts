import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth, { type DefaultSession } from 'next-auth'
import Google from 'next-auth/providers/google'

import { db } from '@/server/db'
import { env } from './env'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      // ...other properties
      // role: UserRole;
    } & DefaultSession['user']
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

export const {
  auth,
  handlers,
  signIn,
  signOut,
  unstable_update: update,
} = NextAuth({
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        email:
          env.NODE_ENV === 'development'
            ? 'lindsay@steadydatecoaching.com'
            : user.email,
        id: user.id,
      },
    }),
    // jwt({ token, trigger, session }) {
    //   if (trigger === 'update') token.name = session?.user?.name
    //   return token
    // },
  },
  adapter: PrismaAdapter(db),
  providers: [Google],
  pages: {
    verifyRequest: '/magic-link-sent',
  },
})
