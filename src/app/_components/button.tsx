import { type ButtonHTMLAttributes } from 'react'

import Link from 'next/link'

const THEMES = {
  primary: 'bg-steady-pink text-white',
  pink: 'bg-white text-steady-pink',
  green: 'bg-white text-steady-green',
  purple: 'bg-white text-steady-purple',
}

interface ButtonPropTypes {
  href?: string
  theme?: keyof typeof THEMES
}

export default function Button({
  theme = 'primary',
  children,
  href,
  className = '',
  type = 'button',
}: ButtonPropTypes & ButtonHTMLAttributes<HTMLButtonElement>) {
  const _className = `${className} ${THEMES[theme]} rounded-full px-12 py-3 text-lg leading-snug self-center`

  if (href)
    return (
      <Link className={_className} href={href}>
        {children}
      </Link>
    )
  else
    return (
      <button type={type} className={_className}>
        {children}
      </button>
    )
}
