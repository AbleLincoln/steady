'use client'

import Link from 'next/link'
import Image from 'next/image'

import { slide as Menu } from 'react-burger-menu'
import '@/styles/burger-menu.css'

// import steadyLogo from 'public/steady-logo.svg'
import steadyLogo from 'public/steady-logo-white.png'

const NAV = [
  {
    href: '#mission',
    label: 'Mission',
  },
  {
    href: '#plans',
    label: 'How it Works',
  },
  {
    href: '#plans',
    label: 'Coaches',
  },
  {
    href: '#faq',
    label: 'FAQ',
  },
]

function items() {
  return NAV.map(({ href, label }) => (
    <li key={href} className="mx-3">
      <Link href={href}>{label}</Link>
    </li>
  ))
}

export default function Header() {
  return (
    <header className="border-bs mb-4 py-5">
      <section className="wrapper flex items-center justify-between text-white">
        <Image
          src={steadyLogo}
          alt="Steady"
          style={{ height: '2.5rem', width: 'auto' }}
        />
        {/* TODO: component */}
        {/* <button className="rounded-full border px-6 py-2">Get Started</button> */}
        {/* TODO: need to rewrite as my own bc broken */}
        <div className="sm:hidden">
          <Menu right>{items()}</Menu>
        </div>
        <ul className="hidden items-center text-lg sm:flex">{items()}</ul>
      </section>
    </header>
  )
}
