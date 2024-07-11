'use client'

import { PopupButton } from 'react-calendly'

export interface PlanProps {
  title: string
  subtitle: string
  supertitle?: string
  url?: string
  price?: number
  bestFor: string
  examples: string[]
}

const buttonStyles = {
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
            className={`font-display text-lg font-light leading-tight ${url ? '' : ''}`}
          >
            {subtitle}
          </p>
        </div>

        <div className="text-center">
          {/* TODO: hydration errors also this is sloppy */}
          {url ? (
            typeof document === 'undefined' ? (
              <button style={buttonStyles}>Book now</button>
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
      {/* <p className="bg-steady-pink px-8 py-2 text-center text-white">
        Book now
      </p> */}
    </div>
  )
}
