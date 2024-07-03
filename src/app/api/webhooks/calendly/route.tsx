import { env } from '@/env'
import { db } from '@/server/db'
import stream from '@/server/stream'
import crypto from 'crypto'
import { DateTime } from 'luxon'
import Mergent from 'mergent'

interface CalendlyWebhookRequest {
  event: 'invitee.created' | 'invitee.canceled'
  payload: {
    email: string
    name: string
    /** Url to the event */
    event: string
    cancel_url: string
    reschedule_url: string
    scheduled_event: {
      name: 'Instant Messaging' | 'Support & Advice'
      /** ISO string */
      start_time: string
      /** ISO string */
      end_time: string
      /** Event membership list */
      event_memberships: {
        user_email: string
        user_name: string
      }[]
    }
    timezone: string
  }
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

const mergent = new Mergent(env.MERGENT_API_KEY)

export async function POST(request: Request) {
  // TODO: webhook singature ! https://developer.calendly.com/api-docs/4c305798a61d3-webhook-signatures
  // https://hookdeck.com/webhooks/guides/how-to-implement-sha256-webhook-signature-verification

  const data = (await request.json()) as CalendlyWebhookRequest

  // console.log(JSON.stringify(data))

  const {
    event: webhookEvent,
    payload: {
      email,
      name,
      event: eventUrl,
      cancel_url,
      reschedule_url,
      timezone,
      scheduled_event: {
        name: eventName,
        start_time,
        end_time,
        event_memberships,
      },
    },
  } = data

  if (webhookEvent !== 'invitee.created') return new Response()
  if (
    !['Instant Messaging', 'Instant Messaging (dev only!)'].includes(eventName)
  )
    return new Response()

  // TODO: check type: created, canceled, reschedueld etc

  //** Create user in Stream */
  const userId = crypto.createHash('md5').update(email).digest('hex')

  const res = await stream.upsertUser({
    id: userId,
    name,
    role: 'user',
  })

  //** Create channel */
  const eventId = eventUrl.split('/').at(-1) ?? ''
  const coachId = event_memberships[0]?.user_email.split('@')[0] ?? 'steady'

  console.log({ coachId })

  await stream
    .channel('messaging', eventId, {
      members: [coachId, userId],
      created_by_id: coachId,
      start_time,
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

  //***** Send confirmation email *****//
  const meetingUrl = createMeetingUrl(eventId)
  const startsAt = DateTime.fromISO(start_time, {
    zone: timezone,
  })
  const endsAt = DateTime.fromISO(end_time, {
    zone: timezone,
  })

  const coach = event_memberships[0]

  const start = startsAt.toMillis()
  const end = endsAt.toMillis()

  const event = {
    title: 'Steady Date Coaching Session',
    start,
    end,
    location: meetingUrl,
    url: meetingUrl,
    organizer: {
      name: coach?.user_name ?? '',
      email: coach?.user_email ?? '',
    },
  }

  await mergent.tasks.create({
    request: {
      url: `https://${
        env.NODE_ENV === 'production'
          ? env.NEXT_PUBLIC_VERCEL_BRANCH_URL
          : 'kind-awaited-sheepdog.ngrok-free.app'
      }/api/tasks/send-email`,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: env.EMAIL_FROM,
        to: email,
        subject: 'Steady Date Coaching Secure Link',
        meetingUrl,
        name,
      }),
    },
    scheduledFor: startsAt.minus({ minutes: 10 }).toJSDate(),
  })

  await mergent.tasks.create({
    request: {
      url: `https://${
        env.NODE_ENV === 'production'
          ? env.NEXT_PUBLIC_VERCEL_BRANCH_URL
          : 'kind-awaited-sheepdog.ngrok-free.app'
      }/api/tasks/send-system-message`,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: eventId,
      }),
    },
    scheduledFor: endsAt.minus({ seconds: 35 }).toJSDate(),
  })

  // await resend.emails.send({
  //   from: env.EMAIL_FROM,
  //   to: email,
  //   subject: 'Steady Date Coaching Secure Link',
  //   react: <SecretLinkEmail meetingUrl={meetingUrl} name={name} />,
  //   // attachments: [
  //   //   {
  //   //     filename: 'invite.ics',
  //   //     content: ics.createEvent(event).value,
  //   //   },
  //   // ],
  // })

  return Response.json(res)
}

function createMeetingUrl(id: string) {
  // console.log({
  //   NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV,
  //   NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
  //   NEXT_PUBLIC_VERCEL_BRANCH_URL: process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL,
  //   VERCEL_URL: process.env.VERCEL_URL,
  //   VERCEL_BRANCH_URL: process.env.VERCEL_BRANCH_URL,
  //   NODE_ENV: process.env.NODE_ENV,
  // })

  return env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
    ? `https://${env.NEXT_PUBLIC_VERCEL_BRANCH_URL}/chat/${id}`
    : `https://steadydatecoaching.com/chat/${id}`
}
