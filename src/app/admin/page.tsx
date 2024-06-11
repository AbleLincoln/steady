import { auth } from '@/auth'
import stream from '@/server/stream'
import { LoadingIndicator } from 'stream-chat-react'
import Chat from './chat'
import Notes from './notes'

export default async function Admin() {
  const session = await auth()

  if (!session?.user.email)
    return (
      <div className="flex grow items-center justify-center">
        <LoadingIndicator size={80} color="rgb(143, 148, 239)" />
      </div>
    )

  const token = stream.createToken(session.user.email.split('@')[0] ?? '')

  console.log({ session, token })

  return (
    <div className="flex grow">
      <Chat user={session.user} token={token} />

      <Notes />
    </div>
  )
}
