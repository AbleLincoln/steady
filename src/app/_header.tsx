'use client'

import Link from 'next/link'
import Image from 'next/image'

import { slide as Menu } from 'react-burger-menu'
import '@/styles/burger-menu.css'

// import steadyLogo from 'public/steady-logo.svg'
import steadyLogo from 'public/steady-logo-green.png'
import Button from '@/app/_components/button'
import { createPortal } from 'react-dom'

const NAV = [
  {
    href: '/#mission',
    label: 'Mission',
  },
  {
    href: '/#plans',
    label: 'How It Works',
  },
  {
    href: '/#coaches',
    label: 'Coaches',
  },
  {
    href: '/faq',
    label: 'FAQ',
  },
]

function items(styles = '') {
  return NAV.map(({ href, label }) => (
    <li key={href} className={`${styles} ml-3`}>
      <Link href={href}>{label}</Link>
    </li>
  ))
}

export default function Header() {
  return (
    <header className="border-bs wrapper absolute inset-x-0 top-0 z-30 flex justify-between py-5">
      <section className="flex grow items-center justify-between bg-cream text-dark md:w-1/2 md:grow-0 md:pr-12">
        <Link href="/" className="shrink-0">
          <Image
            src={steadyLogo}
            alt="Steady"
            style={{ height: '2rem', width: 'auto' }}
          />
        </Link>

        {/* TODO: need to rewrite as my own bc broken */}
        {createPortal(
          <div className="nav-break:hidden absolute right-8 top-5">
            <Menu right>
              <Button className="mb-4 px-6 py-2 text-base" href="/#plans">
                Get Started
              </Button>
              {items('my-4')}
            </Menu>
          </div>,
          document.body,
        )}

        <ul className="nav-break:flex hidden shrink-0 items-center text-lg">
          {items()}
        </ul>
      </section>
    </header>
  )
}
