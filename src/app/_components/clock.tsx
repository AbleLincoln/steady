'use client'

import { useEffect, useState } from 'react'
import { DateTime, type Duration } from 'luxon'
import Link from 'next/link'
import { type CalendlyEvent } from '@/server/api/routers/calendly'

interface ClockPropTypes {
  event: CalendlyEvent
  onTimeout: () => void
}

function calculatePercent(start: DateTime, end: DateTime, remaining: Duration) {
  return remaining.as('seconds') / end.diff(start).as('seconds')
}

export default function Clock({ event, onTimeout }: ClockPropTypes) {
  const start = DateTime.fromISO(event.start_time)
  const end = DateTime.fromISO(event.end_time)

  const [remaining, setRemaining] = useState(
    end.diff(DateTime.now(), 'seconds'),
  )

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (end.diff(DateTime.now()).as('seconds') <= 0) {
        onTimeout()
      } else setRemaining(end.diff(DateTime.now(), 'seconds'))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [end])

  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2">
      <div
        className="circular-progress absolute h-16 w-16"
        style={
          {
            '--p': `${calculatePercent(start, end, remaining) * 100}%`,
          } as React.CSSProperties
        }
      >
        <div className="bar"></div>
      </div>
      <div
        className="ball absolute h-16 w-16"
        style={{
          transform: `rotate(${calculatePercent(start, end, remaining)}turn)`,
        }}
      ></div>
      <p>{remaining.toFormat('m:ss')}</p>
    </div>
  )
}
