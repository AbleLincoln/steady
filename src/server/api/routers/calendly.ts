import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'

export interface CalendlyEvent {
  start_time: string
  end_time: string
}

export interface CalendlyScheduledEventsData {
  collection: CalendlyEvent[]
}

export const calendlyRouter = createTRPCRouter({
  getEventDetails: publicProcedure
    .input(z.string())
    .query(async ({ ctx: _ctx, input }) => {
      const uri = `https://api.calendly.com/scheduled_events?organization=https://api.calendly.com/organizations/17fe8406-f01c-4007-ab73-3fdef0c24dd3&invitee_email=${input}&sort=start_time:desc&count=1&status=active`

      //new URL('https://api.calendly.com/scheduled_events')

      // uri.searchParams.append(
      //   'organization',
      //   'https://api.calendly.com/organizations/17fe8406-f01c-4007-ab73-3fdef0c24dd3',
      // )

      // uri.searchParams.append('invitee_email', input)

      const res = await fetch(uri, {
        headers: { Authorization: `Bearer ${process.env.CALENDLY_TOKEN}` },
      })

      return res.json() as Promise<CalendlyScheduledEventsData>
    }),
})
