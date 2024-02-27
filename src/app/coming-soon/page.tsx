'use client'

import { useState } from 'react'
import Image from 'next/image'

import { api } from '@/trpc/react'

import Divider from '@/app/_components/divider'
import Input from '@/app/_components/input'

import steadyLogo from 'public/steady-logo-green.png'
import manWithEffects from 'public/images/man_with_effects.jpg'
import flower from 'public/images/icons/flower.png'
import couple from 'public/images/blanketcouple.jpg'

export default function ComingSoon() {
  const signUp = api.prereg.signUp.useMutation({
    onSuccess: () => {
      console.log('success')
    },
  })

  return (
    <main className="py-6">
      {/* <header className="pl-12 text-left"></header> */}
      <section className="mb-6 grid md:grid-cols-2">
        <div className="px-6 md:px-12 md:py-8">
          <Image
            src={steadyLogo}
            alt="Steady"
            className="mb-6 inline"
            style={{ height: '2.5rem', width: 'auto' }}
          />
          <h1 className="mb-4 font-sans text-3xl font-light text-steady-green">
            We help you navigate the world of modern dating.
          </h1>
          <p className="max-w-screen-sm text-xl">
            So many people. So many options. So many things that can go weirdly
            wrong. That&apos;s why there&apos;s{' '}
            <span className="text-steady-pink">Steady</span>. Practical dating
            advice from real human coaches to help you navigate the
            unpredictable world of falling in love.
          </p>

          <Divider icon={flower} />

          <section>
            <h2 className="mb-4 font-sans text-3xl font-light text-steady-green">
              Want first dibs?
            </h2>

            <p>Sign up now for exclusive access when we go live.</p>

            <form
              className="relative max-w-screen-sm items-end py-6 md:flex"
              onSubmit={(e) => {
                e.preventDefault()
                console.log(e.target)
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
              </button>
              {signUp.isError && (
                <p className="absolute bottom-0 text-red-500">
                  Please enter a valid email address
                </p>
              )}
            </form>
          </section>
        </div>
        <Image
          src={couple}
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
          alt="Person using phone to chat with dating coach"
          className="rounded-l-steady"
        />
      </section>

      {/* <section className="wrapper relative h-[24rem]"></section> */}
    </main>
  )
}
