import { getServerAuthSession } from '@/server/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import DirectMessaging from './_chat'

export default async function Chat() {
  const session = await getServerAuthSession()

  if (!session) return redirect('/api/auth/signin')

  console.log('user', session.user)

  return (
    <main className="bg-gradient min-h-screen bg-gradient-to-b from-white to-purple-steady">
      {session ? (
        <DirectMessaging session={session} />
      ) : (
        <div>
          <p>Hello, welcome to the Steady Chat</p>
          <Link
            href="/api/auth/signin"
            className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
          >
            Sign in
          </Link>
        </div>
      )}
    </main>
  )
}
