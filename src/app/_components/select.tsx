import { type SelectHTMLAttributes } from 'react'

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: string[]
  name: string
}

export default function Input({ name, label, className, options }: InputProps) {
  return (
    <label
      htmlFor={name}
      className={`${className} col-span-full flex flex-col md:col-span-1`}
    >
      <span className="mb-1 block text-sm">{label}</span>
      <select className="text-dark w-full flex-grow rounded-md bg-white p-2 text-lg">
        <option></option>
        {options.map((opt) => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  )
}
