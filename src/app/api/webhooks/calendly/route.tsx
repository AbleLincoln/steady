import crypto from 'crypto'
import { Resend } from 'resend'
import * as ics from 'ics'
import { DateTime } from 'luxon'

import stream from '@/server/stream'
import { db } from '@/server/db'

import Email from './email'
import { env } from '@/env'

interface CalendlyWebhookRequest {
  event: 'invitee.created' | 'invitee.canceled'
  payload: InviteePayload
}

interface InviteePayload {
  email: string
  name: string
  /** Url to the event */
  event: string
  scheduled_event: ScheduledEvent
}

interface ScheduledEvent {
  //** ISO */
  start_time: string
  //** ISO */
  end_time: string
}

// TODO: move
/**
 * Lists all guest users
 * @param request
 * @returns
 */
// export async function GET(request: Request) {
//   const { users } = await streamClient.queryUsers({ role: 'guest' })
//   const str = users.map((user) => user.id).join(' ')

//   return Response.json(str)
// }

const resend = new Resend(env.AUTH_RESEND_KEY)

export async function POST(request: Request) {
  // TODO: webhook singature! https://developer.calendly.com/api-docs/4c305798a61d3-webhook-signatures
  // https://hookdeck.com/webhooks/guides/how-to-implement-sha256-webhook-signature-verification

  const data = (await request.json()) as CalendlyWebhookRequest

  console.log(data)

  const {
    event: webhookEvent,
    payload: {
      email,
      name,
      event,
      scheduled_event: { start_time, end_time },
    },
  } = data

  if (webhookEvent !== 'invitee.created') return new Response()

  // TODO: check type: created, canceled, reschedueld etc

  //** Create user in Stream */
  const userId = crypto.createHash('md5').update(email).digest('hex')

  const res = await stream.upsertUser({
    id: userId,
    name,
    role: 'user',
  })

  //** Create channel */
  const eventId = event.split('/').at(-1) ?? ''
  await stream
    .channel('messaging', eventId, {
      members: ['steady', userId],
      created_by_id: 'steady',
    })
    .create()

  await db.chatToken.upsert({
    where: {
      id: eventId,
    },
    create: {
      id: eventId,
      user: userId,
    },
    update: {},
  })

  //** Send confirmation email */

  const meetingUrl = createMeetingUrl(eventId)

  await resend.emails.send({
    from: env.EMAIL_FROM,
    to: email,
    subject: 'Steady Date Coaching Invitation',
    react: <Email meetingUrl={meetingUrl} />,
    attachments: [
      {
        filename: 'invite.ics',
        content: createICS({ start_time, end_time, url: meetingUrl }),
      },
    ],
  })

  return Response.json(res)
}

function createMeetingUrl(id: string) {
  console.log({
    NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV,
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    NEXT_PUBLIC_VERCEL_BRANCH_URL: process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL,
    VERCEL_URL: process.env.VERCEL_URL,
    VERCEL_BRANCH_URL: process.env.VERCEL_BRANCH_URL,
  })

  return process.env.NODE_ENV === 'development'
    ? `localhost:3000/chat/${id}`
    : `https://steadydatecoaching.com/chat/${id}`
}

function createICS({
  start_time,
  end_time,
  url,
}: {
  start_time: string
  end_time: string
  url: string
}) {
  const start = DateTime.fromISO(start_time).toUnixInteger()
  const end = DateTime.fromISO(end_time).toUnixInteger()

  const event = {
    start,
    end,
    location: url,
    url,
  }

  return ics.createEvent(event).value
}
