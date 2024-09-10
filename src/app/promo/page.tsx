'use client'

import { redirect } from 'next/navigation'
import { useCallback, useState } from 'react'
import { PopupModal } from 'react-calendly'
import { Modal } from '../_components/plan'

function CodeEval({ code }: { code: string }) {
  /** this code for PopupModal bs */
  const [isOpen, setIsOpen] = useState(true)
  const [rootElement, setRootElement] = useState<HTMLDivElement>()
  const ref = useCallback((node: HTMLDivElement) => {
    if (node) setRootElement(node)
  }, [])

  switch (code) {
    case '':
      return ''

    case 'melissa5':
      return redirect('https://book.stripe.com/eVaaI60Ye6M3deo3ce')

    case 'meetmelissa':
      return (
        <div ref={ref}>
          {rootElement ? (
            <PopupModal
              url="https://calendly.com/steady-coaches/support-advice-with-melissa-discount"
              pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                hideGdprBanner: true,
                primaryColor: 'cb71b2',
                textColor: '1e293b',
              }}
              rootElement={rootElement}
              open={isOpen}
              onModalClose={() => setIsOpen(false)}
            />
          ) : null}
        </div>
      )

    case 'firstonesfree':
      return (
        <Modal
          title="free Instant Messaging"
          url="https://calendly.com/steady-coaches/free-instant-messaging"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )

    default:
      return (
        <span className="text-white opacity-90">
          Sorry, we couldn&apos;t find that code
        </span>
      )
  }
}

export default function Promo({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const code = ((searchParams.code as string) ?? '').toLowerCase()

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

      <CodeEval code={code} />
    </div>
  )
}
