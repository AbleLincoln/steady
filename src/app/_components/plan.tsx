'use client'

import { PopupButton } from 'react-calendly'

export interface PlanProps {
  title: string
  subtitle: string
  url: string
  price: number
  bestFor: string
  examples: string[]
}

const buttonStyles = {
  border: '1px solid white',
  padding: '4px 12px',
  borderRadius: '100px',
  backgroundColor: '#fff',
  color: 'rgb(38, 166, 87)',
}

export default function Plan({
  price = 20,
  bestFor,
  examples,
  url,
  title,
  subtitle,
}: PlanProps) {
  return (
    <div className="my-4 flex flex-col justify-between">
      <div className="py-6">
        <div
          className="wide-grid mb-4 grid items-center gap-y-4"
          style={{
            gridTemplateColumns: '2fr 1fr',
          }}
        >
          <p className="text-2xl">{title}</p>
          <p className="justify-self-end text-xl">${price}</p>

          <p className="text-lg">{subtitle}</p>

          {/* TODO: hydration errors also this is sloppy */}
          {typeof document === 'undefined' ? (
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
          )}
        </div>

        <div className=""></div>

        <hr className="mb-8 mt-6 border" />

        <p className="mb-2">Best for {bestFor}:</p>

        <ul className="list-inside list-disc">
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
