'use client'

import { useEffect, useState } from 'react'
import { DateTime } from 'luxon'
import Link from 'next/link'
import { type CalendlyEvent } from '@/server/api/routers/calendly'

interface ClockPropTypes {
  event: CalendlyEvent
}

export default function Clock({ event }: ClockPropTypes) {
  const start = DateTime.fromISO(event.start_time)
  const end = DateTime.fromISO(event.end_time)

  const [now, setNow] = useState(DateTime.now())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(DateTime.now())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="mb-4 rounded-xl bg-white bg-opacity-50 px-3 py-2 text-sm shadow">
      <Content start={start} end={end} now={now} />
    </div>
  )
}

function Content({
  start,
  end,
  now,
}: {
  start: DateTime
  end: DateTime
  now: DateTime
}) {
  if (!end || !start || end < now)
    // has ended
    return (
      <p>
        Your session has ended. Please schedule a new one{' '}
        <Link href="/#plans" className="underline">
          here
        </Link>
      </p>
    )
  else if (now <= start)
    // has not started
    return `Your session starts in ${formatStartTime(start)}`
  else
    return (
      <p>{calculateRemaining(now, end)} minutes remaining in your session</p>
    )
}

function calculateRemaining(now: DateTime, end: DateTime) {
  return Math.floor(end.diff(now).as('minutes'))
}

function formatStartTime(time: DateTime) {
  const now = DateTime.now()
  const start = time
  const diff = start.diff(now)

  if (diff.as('hours') > 1) return `${Math.floor(diff.as('hours'))} hours`
  else return `${Math.floor(diff.as('minutes'))} minutes`
}
