import { getServerAuthSession } from '@/server/auth'
import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import logo from 'public/steady-logo-white.png'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerAuthSession()

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
        <p className="mt-4">
          If you are a Steady coach,{' '}
          <Link href="/api/auth/signin" className="text-blue-500 underline">
            click here to login
          </Link>
        </p>
      </div>
    )
  //return redirect('/api/auth/signin')
  if (!session.user.email?.endsWith('steadydatecoaching.com'))
    return redirect('/')

  return (
    <div className="flex h-screen flex-col">
      <header className="bg-steady-green px-3 py-3">
        <p className="text-white">
          <Image
            src={logo}
            alt="Steady"
            height={30}
            className="mr-2 inline-block align-bottom"
          />{' '}
          Coaching Platform
        </p>
      </header>
      {children}
    </div>
  )
}
