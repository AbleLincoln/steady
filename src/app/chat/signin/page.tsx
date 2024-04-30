import Image from 'next/image'

import { signIn } from '@/auth'

import logo from 'public/steady-logo-white.png'
import Input from '@/app/_components/input'
import Button from '@/app/_components/button'

export default function SignIn() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-purple-steady">
      <div className="max-w-96 rounded-xl bg-cream shadow-xl">
        <header className="rounded-t-xl bg-steady-green px-4 py-3">
          <Image
            src={logo}
            alt="Steady"
            height={30}
            className="mr-2 inline-block align-bottom"
          />
        </header>
        <form
          className="px-4 pb-4 pt-6"
          action={async (formData) => {
            'use server'
            await signIn('resend', formData)
          }}
        >
          <p className="mb-4 text-center">Get your magic sign-in link</p>

          <Input name="email" type="email" label="Email" />

          <Button className="mt-6 w-full rounded-xl text-center" type="submit">
            Send link
          </Button>
        </form>
      </div>
    </div>
  )
}
