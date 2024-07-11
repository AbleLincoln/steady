'use client'

import { type ButtonHTMLAttributes } from 'react'
import { useFormStatus } from 'react-dom'
import Button, { type ButtonPropTypes } from './button'

export default function SubmitButton(
  props: ButtonPropTypes & ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { pending } = useFormStatus()

  return <Button {...props} type="submit" disabled={pending} />
}
