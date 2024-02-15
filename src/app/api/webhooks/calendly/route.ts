import crypto from 'crypto'
import streamClient from '@/server/stream'

interface CalendlyWebhookRequest {
  event: 'invitee.created' | 'invitee.canceled'
  payload: InviteePayload
}

interface InviteePayload {
  email: string
  name: string
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

  const {
    payload: { email, name },
  } = (await request.json()) as CalendlyWebhookRequest

  console.log({ email, name })

  // TODO: check type: created, canceled, reschedueld etc

  // 1. get invitee email
  // 2. hash email --> userId
  const id = crypto.createHash('md5').update(email).digest('hex')

  const res = await streamClient.upsertUser({
    id,
    name,
    role: 'user',
  })

  return Response.json(res)
}
