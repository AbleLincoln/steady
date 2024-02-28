'use client'

import { useState, useEffect, useRef, useCallback, type RefObject } from 'react'
import Image from 'next/image'

import couple1 from 'public/images/1.jpeg'
import couple2 from 'public/images/2.jpeg'
import couple3 from 'public/images/3.jpeg'
import couple4 from 'public/images/4.jpeg'
import couple5 from 'public/images/5.jpeg'

const handleObserver = (entries, observer, opacities, setOpacities) => {
  console.log({ entries, observer })
  entries.forEach((entry) => {
    const section = ((entry.target as HTMLElement).dataset.section ??
      0) as number

    const newOpacities = opacities.curent
    console.log(newOpacities)

    if (entry.isIntersecting) {
      newOpacities[section] = 1 * entry.intersectionRatio
    } else {
      newOpacities[section] = 0
    }

    console.log(newOpacities)

    setOpacities(newOpacities)
    opacities.current = newOpacities
  })
}

export default function ImageFader({
  targets,
}: {
  targets: RefObject<Element>[]
}) {
  const [opacities, setOpacities] = useState([1, 0])
  const _opacities = useRef([1, 0])

  useEffect(() => {
    console.log({ targets })
    targets.forEach(
      (target) => target.current && observer.current.observe(target.current),
    )
  }, [targets])

  const observer = useRef(
    new IntersectionObserver(
      (entries, observer) =>
        handleObserver(entries, observer, _opacities, setOpacities),
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
      },
    ),
  )

  return (
    <div className="sticky bottom-0 top-0 h-screen">
      <Image
        src={couple3}
        style={{
          objectFit: 'cover',
          objectPosition: 'center 60%',
          opacity: opacities[0],
        }}
        className="h-full"
        alt="Person using phone to chat with dating coach"
      />
      <Image
        src={couple1}
        style={{
          objectFit: 'cover',
          objectPosition: 'center 60%',
          opacity: opacities[1],
        }}
        className="h-full"
        alt="Person using phone to chat with dating coach"
      />
    </div>
  )
}
