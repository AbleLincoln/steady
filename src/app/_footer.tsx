import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

import logo from 'public/steady-logo-white.png'

export default function Footer() {
  return (
    <footer className="col-span-2 flex items-center justify-between bg-steady-green px-12 py-12">
      <Image src={logo} alt="Steady logo" height={30} />

      <div className="flex items-center">
        <Link
          href="https://www.instagram.com/steadyfordating/"
          target="_blank"
          className="mr-6"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-3xl"
            color="white"
          />
        </Link>
        <Link href="https://www.tiktok.com/@steadyfordating" target="_blank">
          <FontAwesomeIcon icon={faTiktok} className="text-2xl" color="white" />
        </Link>
      </div>
    </footer>
  )
}
