import Link from 'next/link'

export default function Plan() {
  return (
    <Link
      className="flex min-h-80 cursor-pointer flex-col justify-between rounded-3xl bg-pink-steady p-10 text-white shadow hover:shadow-xl"
      href="/reserve?plan=quickfix"
    >
      <h3 className="mb-2 text-2xl">Deeper Convo</h3>

      <p>
        25 minute phone call <br /> with a dating expert
      </p>

      <p>
        Book now <span>&gt;</span>
      </p>
    </Link>
  )
}
