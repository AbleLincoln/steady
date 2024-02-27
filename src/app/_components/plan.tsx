import Link from 'next/link'
import Image from 'next/image'

import woman from 'public/images/woman_with_phone.jpg'

export default function Plan() {
  return (
    <Link
      className="mx-4 flex grow cursor-pointer flex-col justify-between rounded-3xl bg-white text-dark shadow-lg hover:shadow-xl"
      href="/reserve?plan=quickfix"
    >
      <div className="relative rounded-t-3xl bg-dark p-8 py-4">
        <h3 className="bottom-0 left-6 text-2xl text-white drop-shadow-lg">
          10 minutes for $25
        </h3>
      </div>
      <div className="px-8 py-4">
        {/* <h3 className="text-steady-pink mb-4 text-lg">
          25 minute of messaging
        </h3> */}

        <p className="mb-2">Best for straight-forward dating questions like:</p>

        <ul className="list-disc pl-4">
          <li>Who should pay on the first date?</li>
          <li>What are some good questions to ask on a first date?</li>
          <li>How do I know if they are interested?</li>
        </ul>

        <p className="text-steady-pink float-right mt-4">Book now &rarr;</p>
      </div>
    </Link>
  )
}
