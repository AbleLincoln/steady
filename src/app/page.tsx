import Image from 'next/image'

import '@/styles/burger-menu.css'

import flower from 'public/images/icons/flower.png'
import sun from 'public/images/icons/sun.png'
import couple3 from 'public/images/3.jpeg'
import couple6 from 'public/images/6.jpg'
import couple from 'public/images/couplewithhearts.jpg'
import bubble from 'public/images/icons/bubbles.png'

import Header from './_header'

import Divider from '@/app/_components/divider'
import Coaches from './_coaches'
import Footer from './_footer'
import Plans from './_components/plans'
import Button from '@/app/_components/button'
import Testimonials from './_testimonials'

export default async function Home() {
  return (
    <>
      <Header />

      <main className="grid-cols-2 md:grid md:pt-0">
        <section className="wrapper flex min-h-screen flex-col justify-between pb-12 pt-24 lg:pt-36">
          <div>
            <h2 className="mb-4 text-4xl leading-tight text-steady-green">
              We help you navigate the world of{' '}
              <span style={{ whiteSpace: 'nowrap' }}>modern dating.</span>
            </h2>
            <p className="text-xl">
              So many people. So many options. So many things that can go
              weirdly wrong. That&apos;s why there&apos;s{' '}
              <span className="text-steady-pink">Steady</span>. Practical dating
              advice from real human coaches to help you navigate the
              unpredictable world of falling in love.
            </p>
          </div>

          <div className="mx-auto flex max-w-sm flex-col text-center">
            <Button href="/#plans">Get Started</Button>
            <p className="mt-4 text-center opacity-85">
              Chat with a coach for as little as $35
            </p>
          </div>

          <Divider icon={flower} />
        </section>

        <section className="h-screen">
          <Image
            src={couple}
            alt="Couple holding hands"
            className="h-full"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 60%',
            }}
          />
        </section>

        <section
          className="left-col wrapper flex min-h-screen flex-col justify-center bg-steady-pink text-white"
          id="mission"
        >
          <h2 className="relative mb-4 inline-block text-4xl leading-snug  ">
            Everyone has the right to date happy.
          </h2>
          <p className="mb-12 text-xl">
            We want to empower people of all ages and orientations to have
            happy, healthy, and worthwhile dating experiences. Sometimes that
            takes talking through an issue, getting a new perspective on a
            situation, or simply dialing in a better online dating profile.
          </p>
          <Button href="/#plans" theme="pink" className="self-center">
            Book a Session
          </Button>
          <Divider icon={sun} color="white" />
        </section>

        <section className="h-screen">
          <Image
            src={couple3}
            alt="Couple holding hands"
            className="h-full"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 60%',
            }}
          />
        </section>

        <section
          className="wrapper relative col-span-2 min-h-screen bg-steady-green py-12 pt-24 text-white"
          id="plans"
        >
          <h2 className="mb-5 whitespace-nowrap text-4xl">
            How It Works
            <Image
              src={bubble}
              alt=""
              className="mb-3 ml-4 inline align-bottom md:ml-10"
            />
          </h2>
          <h3 className="max-w-screen-sm font-sans text-lg font-light">
            Choose the session duration that&apos;s right for you and connect
            with a dating expert right away.
          </h3>

          <Plans />
        </section>

        <section className="left-col min-h-screen bg-white py-28">
          <div className="wrapper relative m-auto flex h-full max-w-screen-xl flex-col pt-12">
            <h2 className="mb-12 text-4xl">Testimonials</h2>
            <Testimonials />
          </div>
        </section>

        <section className="h-screen">
          <Image
            src={couple6}
            alt="Couple holding hands"
            className="h-full"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 60%',
            }}
          />
        </section>

        <section
          className="wrapper col-span-2 bg-steady-purple py-20"
          id="coaches"
        >
          <h2 className="text-4xl text-white">Meet some of our coaches</h2>
          <Coaches />
          <div className="mx-auto mt-16 flex max-w-screen-lg flex-col items-center md:flex-row">
            <Button theme="purple" href="/#plans">
              Book a Session
            </Button>
            <p className="ml-4 mt-12 text-center text-lg text-white md:mt-0">
              Live phone and video chats coming soon!
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
