import crypto from 'crypto'
import streamClient from '@/server/stream'

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
  const { email, name } = (await request.json()) as InviteePayload

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
