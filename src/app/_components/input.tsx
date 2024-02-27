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
  style,
}: InputProps) {
  return (
    <label
      htmlFor={name}
      className={`col-span-full md:col-span-1 ${className}`}
      style={style}
    >
      <span className="mb-1 block text-sm">{label}</span>
      <input
        type={type}
        name={name}
        id={name}
        className="w-full rounded-md border border-dark p-2 text-lg text-dark"
      />
    </label>
  )
}
