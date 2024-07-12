import { z } from 'zod'

import { env } from '@/env'
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'

// TODO: reconcile types somewhere
export interface CalendlyEvent {
  start_time: string
  end_time: string
  // event_memberships: any[]
  name: string
  uri: string
}

export interface CalendlyScheduledEventsData {
  resource: CalendlyEvent
}

export const calendlyRouter = createTRPCRouter({
  getEventDetails: publicProcedure
    .input(z.string())
    .query(async ({ ctx: _ctx, input }) => {
      const uri = `https://api.calendly.com/scheduled_events/${input}`

      //new URL('https://api.calendly.com/scheduled_events')

      // uri.searchParams.append(
      //   'organization',
      //   'https://api.calendly.com/organizations/17fe8406-f01c-4007-ab73-3fdef0c24dd3',
      // )

      // uri.searchParams.append('invitee_email', input)

      const res = await fetch(uri, {
        headers: { Authorization: `Bearer ${env.CALENDLY_TOKEN}` },
      })

      return res.json() as Promise<CalendlyScheduledEventsData>
    }),
})
