'use client'

import { type CalendlyEvent } from '@/server/api/routers/calendly'
import { DateTime, type Duration } from 'luxon'
import { useEffect, useState } from 'react'

interface ClockPropTypes {
  event: CalendlyEvent
  onTimeout?: () => void
}

function calculatePercent(start: DateTime, end: DateTime, remaining: Duration) {
  return remaining.as('seconds') / end.diff(start).as('seconds')
}

export default function Clock({ event, onTimeout }: ClockPropTypes) {
  const start = DateTime.fromISO(event.start_time)
  const end = DateTime.fromISO(event.end_time)

  const [hasStarted, setHasStarted] = useState(start <= DateTime.local())

  const [remaining, setRemaining] = useState(
    hasStarted ? end.diffNow('seconds') : start.diffNow('seconds'),
  )

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!hasStarted && start <= DateTime.local()) {
        setHasStarted(true)
      }

      if (end.diff(DateTime.local()).as('seconds') <= 0) {
        if (onTimeout) onTimeout()
      } else
        setRemaining(
          hasStarted ? end.diffNow('seconds') : start.diffNow('seconds'),
        )
    }, 1000)

    return () => clearInterval(intervalId)
  }, [end, onTimeout, start, hasStarted])

  if (!hasStarted) return <NotYet remaining={remaining} />

  if (remaining.as('seconds') <= 0) return <div></div>

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
        className="ball absolute h-16 w-16 transition-all duration-[850ms] ease-linear"
        style={{
          transform: `rotate(${calculatePercent(start, end, remaining)}turn)`,
        }}
      ></div>
      <p>{remaining.toFormat('m:ss')}</p>
    </div>
  )
}

function NotYet({ remaining }: { remaining: Duration }) {
  const time =
    remaining.as('hours') > 1
      ? `${remaining.toFormat('h')} hours`
      : remaining.as('minutes') > 1
        ? `${remaining.plus({ minute: 1 }).toFormat('m')} minutes`
        : `${remaining.toFormat('s')} seconds`

  return (
    <div className="flex items-center justify-center">
      <p>Your session starts in {time}</p>
    </div>
  )
}
