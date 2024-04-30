import DirectMessaging from '../_chat'

import { api } from '@/trpc/server'

export default async function Chat({ params }: { params: { id: string } }) {
  const token = await api.chatToken.get.query(params.id)

  if (!token) return null

  return (
    <main className="bg-gradient min-h-screen bg-gradient-to-b from-white to-purple-steady">
      <DirectMessaging user={token.user} event={token.id} />
    </main>
  )
}
