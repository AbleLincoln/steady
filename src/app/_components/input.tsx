import { type InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

export default function Input({
  name,
  type = 'text',
  label,
  className,
}: InputProps) {
  return (
    <label htmlFor={name} className={className}>
      <span className="mb-1 block text-sm">{label}</span>
      <input
        type={type}
        name={name}
        id={name}
        className="text-dark w-full rounded-md p-2 text-lg"
      />
    </label>
  )
}
