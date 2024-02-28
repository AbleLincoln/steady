'use client'

import Link from 'next/link'
import Image from 'next/image'

import { slide as Menu } from 'react-burger-menu'
import '@/styles/burger-menu.css'

// import steadyLogo from 'public/steady-logo.svg'
import steadyLogo from 'public/steady-logo-green.png'

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
    href: '#coaches',
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
    <header className="border-bs fixed inset-x-0 top-0 z-30 bg-cream py-5 md:w-1/2">
      <section className="flex items-center justify-between px-8 text-dark">
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
