'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { PopupModal } from 'react-calendly'
import { COACHES } from '../_coaches'

export interface PlanProps {
  title: string
  subtitle: string
  supertitle?: string
  url?: string
  price?: number
  bestFor: string
  examples: string[]
  stripe?: boolean
}

const buttonStyles = {
  display: 'block',
  border: '1px solid white',
  padding: '8px 18px',
  borderRadius: '100px',
  backgroundColor: '#fff',
  color: 'rgb(38, 166, 87)',
  minWidth: '100%',
}

export function Modal({
  title,
  url,
  open,
  onClose,
}: {
  title: string
  url: string
  open: boolean
  onClose: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (open) {
      ref.current?.showModal()
    } else {
      ref.current?.close()
    }
  }, [open])

  const [bookingUrl, setBookingUrl] = useState('')

  return (
    <dialog ref={ref} className="rounded-xl bg-white p-8 backdrop:bg-black/30">
      <button
        className="absolute right-4 top-1 text-xl font-thin"
        onClick={onClose}
      >
        x
      </button>

      <h3 className="mb-6 text-lg">Choose a coach for your {title} Session</h3>
      <div className="grid grid-cols-2 gap-4">
        {COACHES.filter((coach) => coach.name !== 'Claire Wexler').map(
          ({ name, pic }) => (
            <button
              key={name}
              className="flex cursor-pointer items-center rounded-lg border border-transparent p-2 transition-colors hover:border-gray-200 hover:bg-gray-200/20"
              onClick={() => setBookingUrl(`${url}-${name.split(' ')[0]}`)}
            >
              <div className="relative mr-3 h-14 w-14">
                <Image
                  className="rounded-full"
                  src={pic}
                  alt={name}
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                  }}
                />
              </div>
              {name}
            </button>
          ),
        )}

        <button
          className="col-span-1 cursor-pointer rounded-lg border border-transparent p-2 transition-colors hover:border-gray-200 hover:bg-gray-200/20"
          onClick={() => setBookingUrl(url)}
        >
          First Available
        </button>
      </div>

      {ref.current ? (
        <PopupModal
          url={bookingUrl}
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            hideGdprBanner: true,
            primaryColor: 'cb71b2',
            textColor: '1e293b',
          }}
          onModalClose={() => {
            setBookingUrl('')
          }}
          open={!!bookingUrl}
          rootElement={ref.current}
        />
      ) : null}
    </dialog>
  )
}

export default function Plan({
  price,
  bestFor,
  examples,
  url,
  title,
  subtitle,
  supertitle,
  stripe,
}: PlanProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="my-4 flex flex-col justify-between rounded-lg border border-white/50 px-6">
      {url && !stripe ? (
        <Modal
          title={title}
          url={url}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      ) : null}

      <div className="py-6 pt-5">
        <div
          className="wide-grid mb-6 flex flex-col items-start gap-y-4"
          style={{
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <p className="text-2xl font-bold">{title}</p>

          <p className="font-display text-4xl">{price ? `$${price}` : ''}</p>

          <p
            className={`min-h-[45px] font-display text-lg font-light leading-tight`}
          >
            {subtitle}
          </p>
        </div>

        <div className="text-center">
          {url ? (
            stripe ? (
              <a style={buttonStyles} href={url}>
                Book Now
              </a>
            ) : (
              <button style={buttonStyles} onClick={() => setIsModalOpen(true)}>
                Book Now
              </button>
            )
          ) : (
            <p
              style={{
                padding: '26px 1px 10px',
                borderRadius: '100px',
                minWidth: '100%',
              }}
            >
              <em>{supertitle}</em>
            </p>
          )}
        </div>

        <hr className="mb-8 mt-6 border" />

        <p className="mb-2">{bestFor}:</p>

        <ul className="ml-6 list-outside list-disc">
          {examples.map((example, i) => (
            <li key={i} className="py-1">
              {example}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
