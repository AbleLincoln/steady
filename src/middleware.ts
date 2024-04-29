// export { auth as middleware } from '@/auth'

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import { getSession } from 'next-auth/react'
// import { getServerAuthSession } from './server/auth'
// import { auth } from '@/auth'

// // This function can be marked `async` if using `await` inside
// export async function middleware(request: NextRequest) {
//   // const session = await getServerAuthSession()
//   const session = await getSession({
//     req: {
//       ...request,
//       headers: {
//         ...Object.fromEntries(request.headers),
//       },
//     },
//   })
//   if (!session) return

//   console.log({ session }, 'i love you')

//   const {
//     user: { email },
//   } = session

//   console.log({ email })
//   if (email.endsWith('steadydatecoaching.com')) {
//     return NextResponse.redirect(new URL('/admin', request.url))
//   }
// }

// export const config = {
//   matcher: [{ source: '/chat', has: [{ type: 'header', key: 'cookie' }] }],
// }

export { auth as middleware } from '@/auth'

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

export const runtime = 'experimental-edge'
