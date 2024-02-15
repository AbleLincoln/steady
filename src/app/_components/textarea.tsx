import { type InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

export default function TextArea({
  name,
  label,
  className,
  style,
}: InputProps) {
  return (
    <label
      htmlFor={name}
      className={`md:col-span- col-span-full row-span-2 flex flex-col ${className}}`}
      style={style}
    >
      <span className="mb-1 block text-sm">{label}</span>
      <textarea
        name={name}
        id={name}
        className="w-full flex-grow rounded-md p-2 text-lg text-dark"
      />
    </label>
  )
}
