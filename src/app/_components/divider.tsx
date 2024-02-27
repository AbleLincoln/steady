import { type StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface PropTypes {
  icon: string | StaticImport
}

export default function Divider({ icon }: PropTypes) {
  return (
    <div className="wrapper flex items-center p-6">
      <hr className="mr-6 grow border-dark" />
      <Image src={icon} alt="" className="" width={60} />
    </div>
  )
}
