import { type ButtonHTMLAttributes } from 'react'

import Link from 'next/link'

const THEMES = {
  primary: 'bg-steady-pink text-white hover:bg-steady-dark-pink',
  pink: 'bg-white text-steady-pink hover:bg-steady-light-pink hover:text-steady-dark-pink',
  green:
    'bg-white text-steady-green hover:bg-steady-light-pink hover:text-steady-dark-pink',
  purple:
    'bg-white text-steady-purple hover:bg-steady-light-purple hover:text-steady-dark-purple',
}

export interface ButtonPropTypes {
  href?: string
  theme?: keyof typeof THEMES
}

export default function Button({
  theme = 'primary',
  children,
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonPropTypes & ButtonHTMLAttributes<HTMLButtonElement>) {
  const _className = `${className} ${THEMES[theme]} rounded-full px-12 py-3 text-lg leading-snug self-center hover:shadow transition-all ${disabled ? 'opacity-50' : ''}`

  if (href)
    return (
      <Link className={_className} href={href}>
        {children}
      </Link>
    )
  else
    return (
      <button
        type={type}
        className={_className}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    )
}
