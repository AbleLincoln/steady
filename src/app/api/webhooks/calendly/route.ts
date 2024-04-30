import crypto from 'crypto'

import stream from '@/server/stream'
import { db } from '@/server/db'

interface CalendlyWebhookRequest {
  event: 'invitee.created' | 'invitee.canceled'
  payload: InviteePayload
}

interface InviteePayload {
  email: string
  name: string
  event: string
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

export async function POST(request: Request) {
  // TODO: webhook singature! https://developer.calendly.com/api-docs/4c305798a61d3-webhook-signatures
  // https://hookdeck.com/webhooks/guides/how-to-implement-sha256-webhook-signature-verification

  const data = (await request.json()) as CalendlyWebhookRequest

  const {
    event: webhookEvent,
    payload: { email, name, event },
  } = data

  if (webhookEvent !== 'invitee.created') return new Response()

  // TODO: check type: created, canceled, reschedueld etc

  //** Send confirmation email */
  // TODO:

  //** Create user in Stream */
  const userId = crypto.createHash('md5').update(email).digest('hex')

  const res = await stream.upsertUser({
    id: userId,
    name,
    role: 'user',
  })

  //** Create channel */
  const eventId = event.split('/').at(-1)
  await stream
    .channel('messaging', eventId, {
      members: ['steady', userId],
      created_by_id: 'steady',
    })
    .create()

  await db.chatToken.create({
    data: {
      id: eventId,
      user: userId,
    },
  })

  return Response.json(res)
}
