'use client'

import Link from 'next/link'
import Image from 'next/image'

import { slide as Menu } from 'react-burger-menu'
import '@/styles/burger-menu.css'

// import steadyLogo from 'public/steady-logo.svg'
import steadyLogo from 'public/steady-logo-green.png'
import Button from '@/app/_components/button'

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
    href: '/faq',
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
    <header className="border-bs wrapper absolute inset-x-0 top-0 z-30 flex justify-between py-5">
      <section className="flex grow items-center justify-between bg-cream text-dark md:w-1/2 md:grow-0 md:pr-12">
        <Link href="/">
          <Image
            src={steadyLogo}
            alt="Steady"
            style={{ height: '2rem', width: 'auto' }}
          />
        </Link>

        {/* TODO: need to rewrite as my own bc broken */}
        <div className="sm:hidden">
          <Menu right>{items()}</Menu>
        </div>
        <ul className="hidden items-center text-lg sm:flex">{items()}</ul>
      </section>

      <Button href="/book" className="hidden px-12 leading-snug md:block">
        Get Started
      </Button>
    </header>
  )
}
