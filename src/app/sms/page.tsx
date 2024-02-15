import Input from '@/app/_components/input'
import TextArea from '@/app/_components/textarea'

import { api } from '@/trpc/react'

export default async function Chat() {
  async function sendMessage(formData: FormData) {
    'use server'

    const rawFormData = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    }

    console.log(rawFormData)

    api.chat.create.useMutation()
  }

  return (
    <main className="bg-purple-steady">
      <section className="m-auto flex h-full max-w-screen-xl flex-col px-6 py-10 text-white">
        <h1>Text a Steady Coach</h1>

        <form action={sendMessage}>
          <Input name="name" label="Name" />

          <Input type="tel" name="phone" label="Phone number" />

          <TextArea name="message" label="Message" />

          <div className="col-span-full mt-8 text-center">
            <button
              type="submit"
              className="rounded-full bg-beige px-10 py-2 uppercase text-purple-steady transition-shadow hover:shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}
