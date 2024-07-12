import stream from '@/server/stream'

export async function POST(request: Request) {
  const { id, image, name } = (await request.json()) as {
    id: string
    image: string
    name: string
  }

  const res = await stream.upsertUser({
    id,
    name,
    image,
    role: 'coach',
  })

  return Response.json(res)
}
