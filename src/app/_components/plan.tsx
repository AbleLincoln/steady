'use client'

import { PopupButton } from 'react-calendly'

export interface PlanProps {
  url: string
  time: number
  price: number
  bestFor: string
  examples: string[]
}

export default function Plan({
  time,
  price = 20,
  bestFor,
  examples,
  url,
}: PlanProps) {
  return (
    <div className="my-4 flex flex-col justify-between">
      <div className="py-6 md:px-8">
        <div className="mb-4 flex items-end justify-between">
          <p className="text-2xl font-light uppercase">
            {time} minutes <br />
            for ${price}
          </p>
          {/* TODO: hydration errors also this is sloppy */}
          {typeof document === 'undefined' ? (
            <button>Book now</button>
          ) : (
            <PopupButton
              url={url}
              /*
               * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
               * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
               */
              rootElement={document.getElementById('root')!}
              text="Book now"
              styles={{
                border: '1px solid white',
                padding: '4px 12px',
                borderRadius: '100px',
              }}
              pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: true,
                hideLandingPageDetails: false,
                hideGdprBanner: true,
                primaryColor: '8f94ef',
                textColor: '1e293b',
              }}
            />
          )}
        </div>

        <hr className="mb-6 border-2" />

        <p className="text-lg">{time} of instant messaging with a date coach</p>

        <p className="mb-2 mt-8">Best for {bestFor}:</p>

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
