'use client'

import { useState } from 'react'

export interface AccordionItem {
  title: string
  body: string
}

interface AccordionPropTypes {
  items: AccordionItem[]
}

// TODO: animations
export default function Accordion({ items }: AccordionPropTypes) {
  const [activeItem, setActiveItem] = useState(-1)

  return (
    <ul className="mt-12 max-w-screen-md">
      {items.map(({ title, body }, i) => {
        const isActive = activeItem === i

        return (
          <li
            key={title}
            onClick={() => (isActive ? setActiveItem(-1) : setActiveItem(i))}
            className={`${isActive && 'bg-gray-100'} block cursor-pointer border-t px-4 py-4 transition-colors last:border-b hover:bg-gray-100`}
          >
            <h2 className="relative pr-4">
              {title}
              <span
                className={`${isActive ? 'rotate-0' : 'rotate-180'} absolute inset-y-0 right-0 flex items-center text-sm font-light`}
              >
                &#94;
              </span>
            </h2>

            <p
              className="mt-4 hidden pr-8"
              style={{ display: isActive ? 'block' : '' }}
            >
              {body}
            </p>
          </li>
        )
      })}
    </ul>
  )
}
