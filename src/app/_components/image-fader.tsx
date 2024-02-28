'use client'

import { useState, useEffect, useRef, useCallback, type RefObject } from 'react'
import Image from 'next/image'

import couple1 from 'public/images/1.jpeg'
import couple2 from 'public/images/2.jpeg'
import couple3 from 'public/images/3.jpeg'
import couple4 from 'public/images/4.jpeg'
import couple5 from 'public/images/5.jpeg'

export default function ImageFader({
  targets,
}: {
  targets: RefObject<Element>[]
}) {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  const calculateOpacity = (section: number, buffer = 0, span = 1) => {
    console.log({ scrollPosition, height: window.innerHeight, section })

    if (scrollPosition < Math.max(section - 1, 0) * window.innerHeight) return 0
    if (scrollPosition > (section + 1) * window.innerHeight) return 0

    // dumbass
    if (
      section * window.innerHeight >= scrollPosition - buffer &&
      section * window.innerHeight <= scrollPosition + buffer
    )
      return 1

    if (scrollPosition < section * window.innerHeight)
      return Math.abs(
        1 -
          (window.innerHeight * section - scrollPosition) / window.innerHeight,
      )

    if (scrollPosition > section * window.innerHeight)
      return Math.abs(
        1 -
          (scrollPosition - window.innerHeight * section) / window.innerHeight,
      )
  }

  return (
    <div className="sticky bottom-0 top-0 h-screen">
      <Image
        src={couple3}
        style={{
          objectFit: 'cover',
          objectPosition: 'center 60%',
          opacity: calculateOpacity(0, 0, 2),
          transition: 'opacity 150ms',
          willChange: 'opacity',
        }}
        className="absolute h-full"
        alt="Person using phone to chat with dating coach"
      />
      <Image
        src={couple5}
        style={{
          objectFit: 'cover',
          objectPosition: 'center 60%',
          opacity: calculateOpacity(1),
          transition: 'opacity 150ms',
          willChange: 'opacity',
        }}
        className="absolute h-full"
        alt="Person using phone to chat with dating coach"
      />
      <Image
        src={couple2}
        style={{
          objectFit: 'cover',
          objectPosition: 'center 60%',
          opacity: calculateOpacity(2, 200),
          transition: 'opacity 150ms',
          willChange: 'opacity',
        }}
        className="absolute h-full"
        alt="Person using phone to chat with dating coach"
      />
      <Image
        src={couple2}
        style={{
          objectFit: 'cover',
          objectPosition: 'center 60%',
          opacity: calculateOpacity(3, 600),
          transition: 'opacity 150ms',
          willChange: 'opacity',
        }}
        className="absolute h-full"
        alt="Person using phone to chat with dating coach"
      />
      <Image
        src={couple4}
        style={{
          objectFit: 'cover',
          objectPosition: 'center 60%',
          opacity: calculateOpacity(4, 600),
          transition: 'opacity 150ms',
          willChange: 'opacity',
        }}
        className="absolute h-full"
        alt="Person using phone to chat with dating coach"
      />
      <Image
        src={couple4}
        style={{
          objectFit: 'cover',
          objectPosition: 'center 60%',
          opacity: calculateOpacity(5, 600),
          transition: 'opacity 150ms',
          willChange: 'opacity',
        }}
        className="absolute h-full"
        alt="Person using phone to chat with dating coach"
      />
      <Image
        src={couple4}
        style={{
          objectFit: 'cover',
          objectPosition: 'center 60%',
          opacity: calculateOpacity(6, 600),
          transition: 'opacity 150ms',
          willChange: 'opacity',
        }}
        className="absolute h-full"
        alt="Person using phone to chat with dating coach"
      />
    </div>
  )
}
