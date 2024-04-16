import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession } from 'next-auth/react'
import { getServerAuthSession } from './server/auth'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // const session = await getServerAuthSession()
  const session = await getSession({
    req: {
      ...request,
      headers: {
        ...Object.fromEntries(request.headers),
      },
    },
  })
  console.log({ session }, 'i love you')
  const {
    user: { email },
  } = session

  console.log({ email })
  if (email.endsWith('steadydatecoaching.com')) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }
}

export const config = {
  matcher: [{ source: '/chat', has: [{ type: 'header', key: 'cookie' }] }],
}
