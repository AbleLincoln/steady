import { unstable_noStore as noStore } from 'next/cache'
import Image from 'next/image'
import Link from 'next/link'

import '@/styles/burger-menu.css'

import { CreatePost } from '@/app/_components/create-post'
import { getServerAuthSession } from '@/server/auth'
import { api } from '@/trpc/server'

import manWithEffects from 'public/images/man_with_effects.jpg'
import bikeCouple from 'public/images/bikecouple.jpg'
import pinkNoise from 'public/images/pinknoise.png'
import purpleRain from 'public/images/purplerain.png'
import quote from 'public/images/icons/quote.png'
import videocall from 'public/images/videocall.png'
import flower from 'public/images/icons/flower.png'
import hearts from 'public/images/icons/hearts.png'
import lindsay from 'public/images/coaches/lindsay.jpg'
import couple from 'public/images/couple.png'

import Header from './_header'

import Divider from '@/app/_components/divider'
import Plan from '@/app/_components/plan'

export default async function Home() {
  noStore()
  const hello = await api.post.hello.query({ text: 'from tRPC' })
  const session = await getServerAuthSession()

  return (
    <main>
      {/* TODO: make component */}
      <div className="relative min-h-screen overflow-hidden">
        <Image
          src={couple}
          alt=""
          fill
          className="-z-10 -scale-x-100 object-cover object-left-top"
        />

        <Header />
        <section className="wrapper grid items-center gap-10 pb-12 pt-2 sm:pt-8 md:grid-cols-2">
          <div className="">
            <h2 className="mb-4 font-sans text-3xl font-light text-white drop-shadow">
              We help you navigate the world of modern dating.
            </h2>
            <p className="max-w-screen-sm text-xl text-white">
              So many people. So many options. So many things that can go
              weirdly wrong. That&apos;s why there&apos;s{' '}
              <span className="text-white drop-shadow">Steady</span>. Practical
              dating advice from real human coaches to help you navigate the
              unpredictable world of falling in love.
            </p>
            <section className="m-auto flex max-w-sm flex-col pt-12">
              <button className="mb-3 rounded-full bg-dark px-6 py-2 text-white">
                Get Started
              </button>
              <p className="text-center opacity-85">
                Chat with a coach for as little $20
              </p>
            </section>
          </div>
          {/* <Image
            src={videocall}
            alt="Man using phone for online coaching"
            className="rounded-steady"
          /> */}
        </section>
      </div>

      {/* <Divider icon={flower} /> */}

      <section className="wrapper px-6 pb-28 pt-24">
        <h2 className="font-sans font-light text-steady-green">Our Mission</h2>
        <h3 className="relative mb-4 inline-block font-sans text-3xl font-light text-dark">
          Everyone has the right to date happy
          <Image
            src={hearts}
            alt=""
            className="absolute right-0 top-0 -translate-y-6 translate-x-full"
            height={64}
          />
        </h3>
        <p className="max-w-screen-md">
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

      <section className="relative overflow-hidden py-12">
        <Image
          src={purpleRain}
          alt=""
          fill
          className="-z-10 -scale-x-100 object-cover object-left-top"
        />
        <section className="wrapper p-6 text-white">
          <h2 className="mt-4 font-sans font-light">How it works</h2>
          <h3 className="relative mb-2 inline-block font-sans text-2xl font-light drop-shadow">
            Choose the session duration that&apos;s right for you and connect
            with a dating expert right away.
          </h3>
          <div className="px-3 py-8">
            <div className="flex">
              <Plan />
              <Plan />
              <Plan />
            </div>
          </div>
          {/* <div className="-mb-36 -ml-6 w-screen overflow-scroll px-3 py-8">
            <div className="flex">
              <Plan />
              <Plan />
              <Plan />
            </div>
          </div> */}
        </section>
      </section>

      <section className="bg-beige py-28">
        <div className="relative m-auto flex h-full max-w-screen-xl flex-col px-6 pt-12">
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

      <section className="bg-steady-purple px-6 py-16">
        <h2 className="mb-10 font-sans text-3xl font-light text-white">
          Meet some of our coaches
        </h2>

        <div>
          <Image src={lindsay} alt="Lindsay Rowe" />
          <div className="bg-white p-6">
            <h3>Lindsay Rowe</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              officiis placeat blanditiis deleniti necessitatibus. Dolore
              laudantium nam repudiandae nostrum, cum in cumque, repellendus
              accusantium dolores voluptatem eveniet delectus nulla soluta.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center gap-4">
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

      <CrudShowcase />
    </main>
  )
}

async function CrudShowcase() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  const latestPost = await api.post.getLatest.query()

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  )
}
