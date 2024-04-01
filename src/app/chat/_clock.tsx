'use client'

import { DateTime } from 'luxon'
import Link from 'next/link'

export interface CalendlyEvent {
  start_time: string
  end_time: string
}

interface ClockPropTypes {
  event: CalendlyEvent
}

export default function Clock({ event }: ClockPropTypes) {
  let content = ''

  if (!event) content = 'Your session starts soon'
  else if (hasEnded(event.end_time))
    content = (
      <p>
        Your session has ended. Please schedule a new one{' '}
        <Link href="/#plans" className="underline">
          here
        </Link>
      </p>
    )
  else content = `Your session starts in ${formatStartTime(event.start_time)}`

  return (
    <div className="mb-4 rounded-xl bg-white bg-opacity-50 px-3 py-2 shadow">
      {content}
    </div>
  )
}

function hasEnded(end: string) {
  return DateTime.fromISO(end) < DateTime.now()
}

function formatStartTime(time: string) {
  const now = DateTime.now()
  const start = DateTime.fromISO(time)
  const diff = start.diff(now)

  if (diff.as('hours') > 1) return `${Math.floor(diff.as('hours'))} hours`
  else return `${Math.floor(diff.as('minutes'))} minutes`
}
