import Image from 'next/image'

import quote from 'public/images/icons/quote.png'
import { useState } from 'react'

interface Testimonial {
  body: string
  attr: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    body: "I'm a super busy professional who had put love on hold to establish my career. This process has been absolutely the best decision I've made in a long time.",
    attr: 'Vanessa 41',
  },
  {
    body: 'I love their approach, and how candid they are. It has felt like they really listen - and most importantly pick up on the energy and undercurrent of our conversations.',
    attr: 'Tara 36',
  },
  {
    body: 'Working with Steady made dating a joy again.',
    attr: 'Rob 31',
  },
  {
    body: 'These sessions have been both heart-opening and eye-opening',
    attr: 'Ross, 54',
  },
  {
    body: 'My coach was very responsive, an attentive listener, insightful and invested.',
    attr: 'Doug 42',
  },
  {
    body: 'Steady was invested in not only helping me find love, but also in my overall well-being. Very professional program, would recommend!',
    attr: 'Sara 34',
  },
]

function transform(amount: number) {
  return `translateX(${amount * -100}%)`
}

// TODO: swipe https://www.npmjs.com/package/react-swipeable
export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <>
      <div className="flex overflow-hidden">
        {TESTIMONIALS.map(({ body, attr }) => (
          <div
            key={attr}
            className="shrink-0 flex-grow basis-full transition-transform duration-300"
            style={{ transform: transform(active) }}
          >
            <Image
              src={quote}
              alt=""
              width={30}
              className="mb-2 translate-y-4 opacity-80"
            />
            <blockquote className="mb-4 px-2 indent-8 text-2xl font-light">
              {body}
            </blockquote>
            <p className="px-2 opacity-75">- {attr}</p>
          </div>
        ))}
      </div>
      <ul className="mx-auto mt-12 flex w-full max-w-80 justify-around">
        {TESTIMONIALS.map((_, i) => (
          <li
            key={i}
            onClick={() => setActive(i)}
            className={`h-4 w-4 cursor-pointer rounded-full border border-dark/35 ${active === i && 'bg-steady-purple'}`}
          ></li>
        ))}
      </ul>
    </>
  )
}
