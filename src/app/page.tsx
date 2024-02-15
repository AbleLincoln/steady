// import { unstable_noStore as noStore } from "next/cache";
import Link from 'next/link'
import Image from 'next/image'

// import { CreatePost } from "@/app/_components/create-post";
// import { getServerAuthSession } from "@/server/auth";
// import { api } from "@/trpc/server";
import PlanPicker from '@/app/_components/plan-picker'

import steadyLogo from 'public/steady-logo-white.png'
import heroImg from 'public/images/hero.jpg'
import sun from 'public/images/sun-thing.png'
import happyCouple from 'public/images/happy_couple.jpg'
import ReservationForm from './_components/reservation-form'
import Plan from './_components/plan'

export default async function Home() {
  // noStore();
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  return (
    <main>
      <section className="relative h-screen overflow-hidden text-white">
        <Image
          src={heroImg}
          alt=""
          fill
          className="-z-10 hidden -scale-x-100 object-cover object-left-top sm:block"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-steady to-pink-steady sm:opacity-75"></div>
        <div className="m-auto flex h-full max-w-screen-xl flex-col px-6 py-10">
          <header className="mb-4 flex justify-between">
            <Image
              src={steadyLogo}
              alt="Steady"
              style={{ height: '3rem', width: 'auto' }}
            />
            <ul className="hidden items-center text-lg sm:mr-[100px] sm:flex">
              <li className="mx-2">
                <Link href="#mission" scroll>
                  Our Mission
                </Link>
              </li>
              <li className="mx-2">
                <Link href="#plans">Get Help</Link>
              </li>
            </ul>
          </header>

          <div className="flex grow flex-col justify-center rounded-tr-xl border-8 border-white px-8 md:pl-20">
            <h2 className="mb-4 text-4xl font-bold tracking-wide drop-shadow-sm">
              We help you navigate&nbsp;
              <br className="hidden md:block" />
              the world of online dating.
            </h2>
            <p className="max-w-screen-sm text-xl drop-shadow-sm">
              So many people. So many options. So many things that can go
              weirdly wrong. That&apos;s why there&apos;s Steady. Practical
              dating advice from real human coaches to help you navigate the
              unpredictable world of falling in love.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-t-[1.25rem] border-pink-steady bg-pink-steady" />

      <section className="bg-beige" id="mission">
        <div className="relative m-auto flex h-full max-w-screen-xl flex-col items-center px-6 pt-32 text-center">
          <Image
            src={sun}
            alt=""
            className="absolute -left-5 top-0 scale-50 md:left-8 md:top-7 md:scale-[66%]"
          />
          <h2 className="mb-4 text-3xl text-green-steady">
            The time has come for dating wellness
          </h2>

          <p className="mb-14 max-w-screen-sm text-dark">
            Our mission is to empower happy, healthy, worthwhile dating
            experiences for people of all ages and orientations.
          </p>

          {/* <Link
            className="rounded-full bg-green-steady px-10 py-2 uppercase text-white transition-shadow hover:shadow-lg"
            href="#plans"
          >
            Book a session
          </Link> */}
          <div className="-mb-16">
            <Plan />
          </div>
        </div>
      </section>

      <section id="plans">
        <div className="m-auto flex h-full max-w-screen-xl flex-col px-6 py-32">
          <h2 className="mb-6 text-center text-3xl text-pink-steady">
            Start the Conversation
          </h2>
          <p className="text-center">Find the plan that&apos;s best for you</p>
          <div className="grid pt-16 md:grid-cols-2">
            <PlanPicker />
            <div className="relative">
              <Image
                src={happyCouple}
                alt="Happy couple eating dinner"
                className="absolute rounded-tr-xl"
                fill
                style={{ objectFit: 'cover', objectPosition: ' 0 80%' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-steady text-white">
        <div className="m-auto flex h-full max-w-screen-xl flex-col px-6 py-20">
          <ReservationForm />
        </div>
      </section>
      {/* <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.name}</span>}
            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div> */}

      {/* <CrudShowcase /> */}
    </main>
  )
}

// async function CrudShowcase() {
//   const session = await getServerAuthSession();
//   if (!session?.user) return null;

//   const latestPost = await api.post.getLatest.query();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
