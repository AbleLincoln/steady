import { getServerAuthSession } from '@/server/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import DirectMessaging from './_chat'

export default async function Chat({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerAuthSession()

  if (!session) return redirect('/api/auth/signin')

  console.log('user', session.user)

  return (
    <main className="min-h-screen bg-purple-steady">
      {session ? (
        <div className="m-auto max-w-screen-lg p-4">
          <DirectMessaging session={session} />
        </div>
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
