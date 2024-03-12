import { type StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface PropTypes {
  icon: string | StaticImport
  color?: string
}

export default function Divider({ icon, color = 'dark' }: PropTypes) {
  return (
    <div className="flex items-center p-6">
      <hr className={`mr-6 grow border-${color}`} />
      <Image src={icon} alt="" className="" width={60} />
    </div>
  )
}
