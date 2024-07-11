import Header from '@/app/_header'
import { env } from '@/env'
import Image from 'next/image'
import couple from 'public/images/3.jpeg'
import { Resend } from 'resend'
import { z } from 'zod'
import Form, { type State } from './form'

const emailSchema = z.string().email({
  message: 'Invalid Email',
})

export default function Contact() {
  async function submit(prevState: State, formData: FormData) {
    'use server'

    const email = formData.get('email') as string
    const name = formData.get('name') as string
    const message = formData.get('message') as string

    const text = `${name} sent you a message:\n\n${message}`

    try {
      // validate
      emailSchema.parse(email)

      const resend = new Resend(env.AUTH_RESEND_KEY)

      await resend.emails.send({
        from: env.EMAIL_FROM,
        reply_to: email,
        to: 'maneyandrew@gmail.com', //'lindsay@steadydatecoaching.com',
        subject: 'Contact Form Submission',
        text,
      })

      return {
        message: 'success!',
        success: true,
      }
    } catch (error) {
      console.error('error!', error)

      return {
        message: 'nope',
        success: false,
      }
    }
  }

  return (
    <>
      <Header />
      <main className="grid-cols-2 md:grid md:pt-0">
        <section className="wrapper flex min-h-screen flex-col pb-12 pt-24 md:pt-36">
          <h1 className="mb-2 text-4xl text-steady-green">Contact Us</h1>
          <h2 className="font-sans text-xl text-dark">
            Have a question, an awesome idea or an issue that needs resolving?
            Give us a shout - we&#x2019;d love to hear from you.
          </h2>
          <Form action={submit} />
        </section>
        <Image
          src={couple}
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
          alt="Happy couple"
          className="h-screen"
        />
      </main>
    </>
  )
}
