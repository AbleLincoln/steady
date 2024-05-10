import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import { auth, signIn, signOut } from '@/auth'

import logo from 'public/steady-logo-white.png'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session || !session.user.email?.endsWith('steadydatecoaching.com'))
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <p>Sorry, this page is only for Steady coaches.</p>
        <p>
          If you arrived here by accident you can safely go back{' '}
          <Link href="/" className="text-blue-500 underline">
            home
          </Link>
        </p>
        <form
          action={async () => {
            'use server'
            await signIn('google')
          }}
        >
          <p className="mt-4">
            If you are a Steady coach,{' '}
            <button type="submit" className="text-blue-500 underline">
              click here to login
            </button>
          </p>
        </form>
      </div>
    )

  if (!session.user.email?.endsWith('steadydatecoaching.com'))
    return redirect('/')

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between bg-steady-green px-3 py-3">
        <p className="text-white">
          <Image
            src={logo}
            alt="Steady"
            height={30}
            className="mr-2 inline-block align-bottom"
          />{' '}
          Coaching Platform
        </p>
        <form
          action={async () => {
            'use server'
            await signOut({ redirectTo: '/' })
          }}
        >
          <button type="submit" className="text-white">
            Sign Out
          </button>
        </form>
      </header>
      {children}
    </div>
  )
}
