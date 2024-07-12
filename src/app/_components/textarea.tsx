import { type InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

export default function TextArea({
  name,
  label,
  className = '',
  style,
  required,
}: InputProps) {
  return (
    <label
      htmlFor={name}
      className={`col-span-full row-span-2 flex flex-col md:col-span-1 ${className}`}
      style={style}
    >
      <span className="mb-1 block text-sm">{label}</span>
      <textarea
        name={name}
        id={name}
        className="w-full flex-grow rounded-md border border-dark p-2 text-lg text-dark"
        required={required}
      />
    </label>
  )
}
