import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChannelHeader } from 'stream-chat-react'

import Clock from '@/app/_components/clock'
import Button from '@/app/_components/button'
import { type CalendlyEvent } from '@/server/api/routers/calendly'

import logo from 'public/steady-logo-green.png'

export default function Header({ event }: { event?: CalendlyEvent }) {
  const [sessionComplete, setSessionComplete] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)

  const handleTimeout = () => {
    setSessionComplete(true)
    setModalOpen(true)
  }

  return (
    <header className="flex justify-between rounded-t-xl border-b border-black bg-white px-3 py-2">
      <ChannelHeader />
      {sessionComplete ? (
        <Button href="/#plans" className="text-sm">
          New Session
        </Button>
      ) : (
        <Clock event={event} onTimeout={handleTimeout} />
      )}

      <Modal open={isModalOpen} onClose={() => setModalOpen(false)} />
    </header>
  )
}

function Modal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (open) {
      ref.current?.showModal()
    } else {
      ref.current?.close()
    }
  }, [open])

  return (
    <dialog
      className={`fixed inset-0 z-10 h-screen w-screen items-center justify-center bg-black/50 p-10 ${open ? 'flex' : ''}`}
    >
      <div className="relative max-w-[540px] rounded-xl bg-white p-8 px-12">
        <button
          className="absolute right-4 top-1 text-2xl font-thin opacity-75"
          onClick={onClose}
        >
          x
        </button>

        <Image src={logo} alt="Steady" className="m-auto" height={30} />
        <p className="my-8 text-center text-2xl text-steady-green">
          That&apos;s all the time we have for now.
          <br /> We&apos;re always here when you&apos;re ready to talk some
          more.
        </p>

        <div className="flex justify-around">
          <Button href="/#plans">Book Again</Button>
          <Button onClick={onClose}>Good for Now</Button>
        </div>
      </div>
    </dialog>
  )
}
