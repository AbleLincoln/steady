'use client'

import { PopupButton } from 'react-calendly'
import Button from './button'

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
  return (
    <div className="relative my-4 flex flex-col justify-between rounded-lg border border-white/50 px-6">
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
          {/* TODO: hydration errors also this is sloppy */}
          {url ? (
            stripe ? (
              <a
                style={buttonStyles}
                href="https://book.stripe.com/test_bIY00Nd1bcljcow144"
              >
                Book Now
              </a>
            ) : typeof document === 'undefined' ? (
              <button style={buttonStyles}>Book Now</button>
            ) : (
              <PopupButton
                url={url}
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={document.getElementById('root')!}
                text="Book now"
                styles={buttonStyles}
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
