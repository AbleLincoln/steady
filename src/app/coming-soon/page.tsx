import Image from 'next/image'

import Divider from '@/app/_components/divider'
import SignUpForm from './_signup-form'

import steadyLogo from 'public/steady-logo-green.png'
import flower from 'public/images/icons/flower.png'
import couple from 'public/images/3.jpeg'

export default function ComingSoon() {
  return (
    <main className="">
      <section className="grid md:grid-cols-2">
        <div className="px-6 py-6 md:px-12">
          <Image
            src={steadyLogo}
            alt="Steady"
            className="mb-10 inline"
            style={{ height: '2.5rem', width: 'auto' }}
          />
          <h1 className="mb-4 text-3xl text-steady-green">
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

          <SignUpForm />
        </div>
        <Image
          src={couple}
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
          alt="Person using phone to chat with Dating Coach"
          className="h-screen"
        />
      </section>
    </main>
  )
}
