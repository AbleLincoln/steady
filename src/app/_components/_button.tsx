import { type HTMLAttributes } from 'react'

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
}: ButtonPropTypes & HTMLAttributes<HTMLButtonElement>) {
  const _className = `${className} ${THEMES[theme]} rounded-full px-12 py-3 text-lg leading-snug`

  if (href)
    return (
      <Link className={_className} href={href}>
        {children}
      </Link>
    )
  else return <button className={_className}>{children}</button>
}
