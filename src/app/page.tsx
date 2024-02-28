'use client'

import { useRef } from 'react'

// import { unstable_noStore as noStore } from 'next/cache'
import Image, { type StaticImageData } from 'next/image'
// import Link from 'next/link'

import '@/styles/burger-menu.css'

// import { CreatePost } from '@/app/_components/create-post'
// import { getServerAuthSession } from '@/server/auth'
// import { api } from '@/trpc/server'

import quote from 'public/images/icons/quote.png'
import flower from 'public/images/icons/flower.png'
import hearts from 'public/images/icons/hearts.png'
import lindsay from 'public/images/coaches/lindsay.jpg'
import claire from 'public/images/coaches/claire.jpg'

import Header from './_header'

import Divider from '@/app/_components/divider'
import Plan from '@/app/_components/plan'
import ImageFader from './_components/image-fader'

const COACHES = [
  {
    name: 'Lindsay Rowe',
    pic: lindsay,
    bio: `Lindsay spent several years in the tough dating climate of NYC before finding her husband and happy ending on a dating app. She transferred those life lessons to professional matchmaking, where her clients often needed frequent, practical dating advice more than anything else. Most of the time they were things she could successfully coach them on in 15-20 minutes over the phone or via text - in real-time when they needed it most. Lindsay wanted to create a safe space where more people could gain easy access to expert dating counsel without costing a small fortune. She wanted that space to simultaneously be a catalyst for healthy dating behaviors that support peoples' overall wellbeing and happiness.`,
  },
  {
    name: 'Claire Wexler',
    pic: claire,
    bio: `Claire has been a dating and relationship coach for over 15 years, including over 12 years as Vice President of one of the largest luxury matchmaking firms in the nation. She’s considered a leader in the dating industry and has worked with some of the country's most influential people- top CEOs, entrepreneurs and successful executives. Claire is responsible for dozens of marriages and hundreds of successful relationships.
    \n As an industry leader, Claire is a sought-after expert on the topics of love and dating. She has been featured in national print, online and television shows including NBC, FOX, USA Today, Women's Health and OK! TV. `,
  },
]

export default function Home() {
  // noStore()
  // const hello = await api.post.hello.query({ text: 'from tRPC' })
  // const session = await getServerAuthSession()
  const firstRef = useRef<HTMLElement>(null)
  const secondRef = useRef<HTMLElement>(null)

  return (
    <main className="grid grid-cols-1 items-center pt-24 md:grid-cols-2 md:pt-0">
      <Header />

      <section className="left-col px-8" ref={firstRef} data-section="0">
        <h2 className="mb-4 font-sans text-4xl font-light text-steady-green">
          We help you navigate the world of{' '}
          <span style={{ whiteSpace: 'nowrap' }}>modern dating.</span>
        </h2>
        <p className="text-xl">
          So many people. So many options. So many things that can go weirdly
          wrong. That&apos;s why there&apos;s{' '}
          <span className="text-steady-pink">Steady</span>. Practical dating
          advice from real human coaches to help you navigate the unpredictable
          world of falling in love.
        </p>

        <Divider icon={flower} />

        <div className="m-auto flex max-w-sm flex-col pt-4">
          <button className="mb-3 rounded-full bg-steady-pink px-6 py-3 text-lg text-white">
            Get Started
          </button>
          <p className="text-center opacity-85">
            Chat with a coach for as little $20
          </p>
        </div>
      </section>

      <ImageFader targets={[firstRef, secondRef]} />

      <section
        className="left-col overflow-hidden px-8 pb-96 pt-80"
        ref={secondRef}
        data-section="1"
      >
        <h2 className="-mt-12 font-sans font-light text-steady-green">
          Our Mission
        </h2>
        <h3 className="relative mb-4 inline-block font-sans text-3xl font-light text-dark">
          Everyone has the right to date happy
          <Image
            src={hearts}
            alt=""
            className="absolute right-0 top-0 -translate-y-6 translate-x-full"
            height={64}
          />
        </h3>
        <p className="">
          We want to empower people of all ages and orientations to have happy,
          healthy, and worthwhile dating experiences. Sometimes that takes
          talking through an issue, getting a new perspective on a situation, or
          simply dialing in a better online dating profile.
        </p>
      </section>

      {/* <div className="wrapper flex items-center p-6 pl-6">
        <hr className="grow border-dark" />
        <button className="ml-6 rounded-full border px-6 py-2 text-sm">
          Get Started
        </button>
      </div> */}

      {/* <Image
          src={purpleRain}
          alt=""
          fill
          className="-z-10 -scale-x-100 object-cover object-left-top"
        /> */}
      <section className="left-col textured relative row-span-2 min-h-screen self-stretch bg-steady-green px-6 py-12 pt-24 text-white">
        <h2 className="mt-4 font-sans font-light">How it works</h2>
        <h3 className="relative mb-6 inline-block font-sans text-2xl font-light drop-shadow">
          Choose the session duration that&apos;s right for you and connect with
          a dating expert right away.
        </h3>

        <div className="flex flex-col">
          <Plan />
          <div className="z-10 self-end">
            <Plan />
          </div>
          <Plan />
        </div>
      </section>

      <section className="left-col min-h-screen bg-beige py-28">
        <div className="relative m-auto flex h-full max-w-screen-xl flex-col px-8 pt-12">
          <h2 className="mb-12 font-sans text-3xl font-light">Testimonials</h2>
          <Image
            src={quote}
            alt=""
            width={30}
            className="mb-2 translate-y-4 opacity-80"
          />
          <blockquote className="mb-4 px-2 indent-8 text-2xl font-light">
            I love their approach and how candid they are. They really listen
            and most importantly pick up on the energy and undercurrent of our
            conversations.
          </blockquote>
          <p className="px-2 opacity-75">- Tara, 36</p>
        </div>
      </section>

      <section className="left-col textured bg-steady-purple px-8 py-16">
        <h2 className="mb-16 font-sans text-3xl font-light text-white drop-shadow">
          Meet some of our coaches
        </h2>

        {COACHES.map(({ name, pic, bio }) => (
          <Coach key={name} name={name} pic={pic} bio={bio} />
        ))}

        <div className="m-auto flex max-w-sm flex-col pt-4">
          <button className="z-10 mb-3 rounded-full bg-dark px-6 py-3 text-lg text-white">
            Book a session
          </button>
          <p className="z-10 text-center opacity-85">
            Live phone and video chats coming soon!
          </p>
        </div>
      </section>

      {/* <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-center text-2xl text-white">
          {session && <span>Logged in as {session.user?.name}</span>}
        </p>
        <Link
          href={session ? '/api/auth/signout' : '/api/auth/signin'}
          className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        >
          {session ? 'Sign out' : 'Sign in'}
        </Link>
      </div>

      <CrudShowcase /> */}
    </main>
  )
}

// async function CrudShowcase() {
//   const session = await getServerAuthSession()
//   if (!session?.user) return null

//   const latestPost = await api.post.getLatest.query()

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   )
// }

function Coach({
  name,
  pic,
  bio,
}: {
  name: string
  pic: StaticImageData
  bio: string
}) {
  return (
    <div className="mb-20 flex flex-col md:flex-row">
      <div className="relative z-20 m-auto h-60 w-60 shrink-0 md:m-0">
        <Image
          src={pic}
          alt={name}
          className="rounded-full border border-dark shadow-lg"
          fill
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>
      <div className="z-10 -mt-10 rounded-lg border border-dark bg-white p-6 pt-14 shadow-lg md:-ml-10 md:mt-0 md:pl-14 md:pt-6">
        <h3 className="mb-4 text-lg">{name}</h3>
        <p>{bio}</p>
      </div>
    </div>
  )
}
