import stream from '@/server/stream'

export async function POST(request: Request) {
  try {
    const { id } = (await request.json()) as {
      id: string
    }

    console.log(`sending message to ${id}`)

    const channel = stream.getChannelById('messaging', id, {})
    await channel.sendMessage({
      text: 'You have 30 seconds remaining',
      type: 'system',
      user_id: 'steady',
    })

    return new Response('', { status: 200 })
  } catch (error) {
    console.error(error)

    return new Response(JSON.stringify({ error }), { status: 500 })
  }
}
