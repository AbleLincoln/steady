import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

import logo from 'public/steady-logo-white.png'

export default function Footer() {
  return (
    <footer className="col-span-2 flex flex-wrap items-center justify-between bg-steady-green px-12 py-12">
      <Image
        src={logo}
        alt="Steady logo"
        height={30}
        className="xs:mb-6 mr-8"
      />

      <div className="xs:justify-between flex grow items-center justify-end text-white">
        <div>
          <Link href="/contact" className="hover:text-steady-dark-green">
            Contact Us
          </Link>
          <Link href="/terms" className="mx-6 hover:text-steady-dark-green">
            Terms
          </Link>
        </div>

        <div className="flex items-center">
          <Link
            href="https://www.instagram.com/steadyfordating/"
            target="_blank"
            className="mx-6"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="h-8 hover:text-steady-dark-green"
              color="white"
            />
          </Link>
          <Link href="https://www.tiktok.com/@steadyfordating" target="_blank">
            <FontAwesomeIcon
              icon={faTiktok}
              className="h-6 hover:text-steady-dark-green"
              color="white"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}
