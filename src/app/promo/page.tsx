'use client'

import { redirect } from 'next/navigation'
import { InlineWidget } from 'react-calendly'

const CODES: Record<string, string> = {
  meetmelissa:
    'https://calendly.com/steady-coaches/support-advice-with-melissa-discount',
  melissa5: 'https://book.stripe.com/eVaaI60Ye6M3deo3ce',
  firstonesfree: 'https://calendly.com/steady-coaches/instant-messaging-on-us',
}

export default function Promo({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const code = ((searchParams.code as string) ?? '').toLowerCase()

  if (code && CODES[code]) {
    if (CODES && CODES[code]?.includes('book.stripe.com'))
      return redirect(CODES[code])

    return (
      <InlineWidget
        url={CODES[code]}
        styles={{
          height: '100%',
        }}
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          hideGdprBanner: true,
          primaryColor: 'cb71b2',
          textColor: '1e293b',
        }}
      />
    )
  }

  return (
    <div className="pt-28">
      <h1 className="text-4xl text-white">Got a promo code?</h1>
      <form action="" className="m-auto flex max-w-96 py-10">
        <input
          className="mx-2 w-full rounded p-2"
          placeholder="Code"
          name="code"
        />
        <button
          type="submit"
          className="mx-2 rounded bg-white px-4 text-dark transition-colors hover:bg-steady-purple hover:text-white hover:shadow"
        >
          Enter
        </button>
      </form>
      {code ? (
        <span className="text-white opacity-90">
          Sorry, we couldn&apos;t find that code
        </span>
      ) : null}
    </div>
  )
}
