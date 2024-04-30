import NextAuth, { type DefaultSession } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import Resend from 'next-auth/providers/resend'

import { env } from '@/env'
import { db } from '@/server/db'

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
    redirect: () => {
      return '/chat'
    },
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
    // jwt({ token, trigger, session }) {
    //   if (trigger === 'update') token.name = session?.user?.name
    //   return token
    // },
  },
  adapter: PrismaAdapter(db),
  providers: [
    Resend({
      from: env.EMAIL_FROM,
    }),
  ],
  pages: {
    verifyRequest: '/magic-link-sent',
  },
})
