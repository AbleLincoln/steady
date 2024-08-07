'use client'

import { InlineWidget } from 'react-calendly'

export default function Reserve() {
  return (
    <div className="min-h-screen bg-purple-steady text-white">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        Loading...
      </div>
      <InlineWidget
        url="https://calendly.com/d/46s-xhy-xpz/quick-chat"
        styles={{
          height: '98vh',
        }}
      />
    </div>
  )
}
