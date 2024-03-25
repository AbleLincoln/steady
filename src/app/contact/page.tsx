import Image from 'next/image'

import Header from '@/app/_header'
import Input from '@/app/_components/input'
import TextArea from '@/app/_components/textarea'

import couple from 'public/images/3.jpeg'
import Button from '../_components/button'

export default function Contact() {
  return (
    <>
      <Header />
      <main className="grid-cols-2 md:grid md:pt-0">
        <section className="wrapper flex min-h-screen flex-col pb-12 pt-24 md:pt-36">
          <h1 className="text-4xl text-steady-green">
            touch us in strange places
          </h1>

          <form action="" className="grid gap-6 pt-8">
            <Input label="Email address" name="email" />
            <TextArea label="Message" name="message" className="h-36" />
            <Button className="rounded-md" type="submit">
              Send
            </Button>
          </form>
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
