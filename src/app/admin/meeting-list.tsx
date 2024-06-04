'use client'

import { type CalendlyEvent } from '@/server/api/routers/calendly'

function getEventId(url: string) {
  return url.split('/').at(-1) ?? ''
}

export default function MeetingList({ events }: { events: CalendlyEvent[] }) {
  console.log(events)

  return (
    <ul className="p-6">
      {events.map(({ uri, start_time }) => (
        <li key={getEventId(uri)}>{start_time}</li>
      ))}
    </ul>
  )
}
