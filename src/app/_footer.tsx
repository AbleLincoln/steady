import Image from 'next/image'

import logo from 'public/steady-logo-white.png'

export default function Footer() {
  return (
    <footer className="col-span-2 bg-steady-green px-12 py-12">
      <Image src={logo} alt="Steady logo" height={30} />
    </footer>
  )
}
