import Link from 'next/link'
import Image from 'next/image'

import woman from 'public/images/woman_with_phone.jpg'

export default function Plan() {
  return (
    <Link
      className=" z-10 my-4 flex max-w-sm grow cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-dark bg-white text-dark shadow"
      href="/reserve?plan=quickfix"
    >
      <div className="px-8 py-6">
        <h3 className="mb-4 text-xl">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-dark text-white">
            10
          </span>{' '}
          minutes <span className="font-sans">for $20</span>
        </h3>

        <p className="mb-4 mt-8 text-sm">
          Best for straight-forward dating questions like:
        </p>

        <ul className="list -mx-8">
          <li className="border-b px-8 py-1">
            Who should pay on the first date?
          </li>
          <li className="border-b px-8 py-1">
            What are some good questions to ask on a first date?
          </li>
          <li className="px-8 py-1">How do I know if they are interested?</li>
        </ul>
      </div>
      <p className="bg-steady-pink px-8 py-2 text-center text-white">
        Book now
      </p>
    </Link>
  )
}
