import { env } from '@/env'
import SecretLinkEmail from 'emails/secret-link'
import { Resend } from 'resend'

const resend = new Resend(env.AUTH_RESEND_KEY)

export async function POST(request: Request) {
  try {
    await performTask(request)
    // task was successful, respond with 200

    // response.status(200).send('')
    return new Response('', { status: 200 })
  } catch (err) {
    console.error(err)
    // task failed, respond with 500 so Mergent will retry
    // response.status(500).send({ error: err })
    return new Response(JSON.stringify({ error: err }), { status: 500 })
  }
}

interface TaskBody {
  from: string
  to: string
  subject: string
  meetingUrl: string
  name: string
}

async function performTask(request: Request) {
  // This is where you'll perform your task.
  // For now, we'll just log it.
  const { from, to, subject, meetingUrl, name } =
    (await request.json()) as TaskBody

  return resend.emails.send({
    from,
    to,
    subject,
    react: <SecretLinkEmail meetingUrl={meetingUrl} name={name} />,
  })
}
