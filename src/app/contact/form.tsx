'use client'

import Input from '@/app/_components/input'
import TextArea from '@/app/_components/textarea'
import { useFormState } from 'react-dom'
import SubmitButton from '../_components/submit-button'

export interface State {
  message: string
  success: boolean
}

const initialState: State = {
  message: '',
  success: false,
}

export default function Form({
  action,
}: {
  action: (state: State, payload: FormData) => State | Promise<State>
}) {
  const [state, formAction] = useFormState<State, FormData>(
    action,
    initialState,
  )

  if (state.success)
    return (
      <div className="pt-20">
        <p className="text-center text-xl text-steady-pink">
          Thank you for your message!
        </p>
      </div>
    )

  return (
    <form action={formAction} className="grid gap-6 pt-8">
      <Input label="Name" name="name" required />
      <Input label="Email address" name="email" required />
      <TextArea label="Message" name="message" className="h-36" required />
      <SubmitButton className="rounded-md">Send</SubmitButton>

      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
    </form>
  )
}
