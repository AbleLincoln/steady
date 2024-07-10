import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

import logo from 'public/steady-logo-white.png'

export default function Footer() {
  return (
    <footer className="col-span-2 flex items-center justify-between bg-steady-green px-12 py-12">
      <Image src={logo} alt="Steady logo" height={30} />

      <div className="flex items-center text-white">
        <Link href="/contact" className="hover:text-steady-dark-green mx-6">
          Contact Us
        </Link>

        <Link
          href="https://www.instagram.com/steadyfordating/"
          target="_blank"
          className="mx-6"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="hover:text-steady-dark-green h-8"
            color="white"
          />
        </Link>
        <Link href="https://www.tiktok.com/@steadyfordating" target="_blank">
          <FontAwesomeIcon
            icon={faTiktok}
            className="hover:text-steady-dark-green h-6"
            color="white"
          />
        </Link>
      </div>
    </footer>
  )
}
