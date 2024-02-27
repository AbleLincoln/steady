'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { api } from '@/trpc/react'

import Input from '@/app/_components/input'

export default function SignUpForm() {
  const signUp = api.prereg.signUp.useMutation({})

  return signUp.isSuccess ? (
    <section className="mb-12">
      <h2 className="mb-4 font-sans text-3xl font-light text-steady-green">
        Thank you!
      </h2>
      <p>We promise we won&apos;t ghost you. We will be in touch soon.</p>
    </section>
  ) : (
    <section>
      <h2 className="mb-4 font-sans text-3xl font-light text-steady-green">
        Want first dibs?
      </h2>

      <p>Sign up now for exclusive access when we go live.</p>

      <form
        className="relative max-w-screen-sm items-end py-6 md:flex"
        onSubmit={(e) => {
          e.preventDefault()

          const formData = new FormData(e.target as HTMLFormElement)
          const email = formData.get('email') as string

          // TODO: validation

          signUp.mutate({ email })
        }}
      >
        <Input label="Email address" name="email" className="grow" />
        <button
          type="submit"
          className="mt-4 w-full rounded-lg border border-steady-pink bg-steady-pink px-6 py-2 text-lg text-white md:ml-4 md:w-auto"
        >
          Sign Up
          {signUp.isLoading && (
            <FontAwesomeIcon icon={faSpinner} className="fa-spin-pulse ml-3" />
          )}
        </button>
        {signUp.isError && (
          <p className="absolute bottom-0 text-red-500">
            Please enter a valid email address
          </p>
        )}
      </form>
    </section>
  )
}
