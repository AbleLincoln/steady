import NextAuth, { type DefaultSession } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import Nodemailer from 'next-auth/providers/nodemailer'
import Resend from 'next-auth/providers/resend'

import { env } from '@/env'
import { db, prisma } from '@/server/db'

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
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: { password: { label: 'Password', type: 'password' } },
      async authorize(credentials) {
        if (credentials.password !== 'password') return null
        return {
          id: '1',
          name: 'Fill Murray',
          email: 'bill@fillmurray.com',
          image: 'https://source.boringavatars.com/marble/120',
        }
      },
    }),
    Resend({
      from: env.EMAIL_FROM,
    }),
    // Nodemailer({
    //   server: {
    //     host: 'smtp-relay.brevo.com',
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //       user: 'andrew@steadydatecoaching.com', // generated ethereal user
    //       pass: env.EMAIL_PASS, // generated ethereal password
    //     },
    //   },
    //   from: env.EMAIL_FROM,
    // }),
  ],
})
