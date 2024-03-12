'use client'

import { useState, useEffect, useRef, useCallback, type RefObject } from 'react'
import Image from 'next/image'

import couple1 from 'public/images/1.jpeg'
import couple2 from 'public/images/2.jpeg'
import couple3 from 'public/images/3.jpeg'
import couple4 from 'public/images/4.jpeg'
import couple5 from 'public/images/5.jpeg'

const IMAGES = [couple5, couple3]

export default function ImageFader({
  targets,
}: {
  targets: RefObject<Element>[]
}) {
  const [currentSection, setSection] = useState(0)

  const cb: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      console.log('callback', entry)
      if (entry.isIntersecting) {
        // flip image
        const section = (entry.target as HTMLElement).dataset.section ?? '0'
        console.log('now showing', section)
        setSection(parseInt(section))
      }
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(cb, { threshold: 0.25 })
    targets.forEach(
      (target) => target.current && observer.observe(target.current),
    )
  }, [targets])

  return (
    <div className="sticky bottom-0 top-0 h-screen ">
      {IMAGES.map((img, i) => (
        <Image
          key={i}
          src={img}
          style={{
            objectFit: 'cover',
            objectPosition: 'center 60%',
            opacity: i === currentSection ? 1 : 0,
            transition: 'opacity 1000ms',
            willChange: 'opacity',
          }}
          className="absolute h-full"
          alt=""
        />
      ))}
    </div>
  )
}
