'use client'

import CustomTypingIndicator from '@/app/_components/TypingIndicator'
import { useChatClient } from '@/app/_hooks/useChatClient'
import '@/styles/stream.css'
import { api } from '@/trpc/react'
import { DateTime } from 'luxon'
import Image from 'next/image'
import logo from 'public/steady-logo-green.png'
import { useEffect, useState } from 'react'
import {
  Channel,
  Chat,
  LoadingIndicator,
  MessageInput,
  MessageList,
} from 'stream-chat-react'
import 'stream-chat-react/dist/css/v2/index.css'
import Header from './header'

const apiKey = 'mspwbbwcvzjm'

export default function DirectMessaging({
  user,
  event,
}: {
  user: string
  event: string
}) {
  const chatClient = useChatClient({
    apiKey,
    user: {
      id: user,
    },
  })

  const getEventDetails = api.calendly.getEventDetails.useQuery(event)

  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!getEventDetails.data) return

      const end = DateTime.fromISO(getEventDetails.data?.resource.end_time)

      if (DateTime.local().diff(end).as('minutes') > 2) {
        clearInterval(intervalId)
        setDisabled(true)
      }
    }, 1000 * 10)

    return () => clearInterval(intervalId)
  }, [getEventDetails.data])

  if (!chatClient) return <LoadingIndicator />

  const channel = chatClient.getChannelById('messaging', event, {})

  return (
    <div className="client-only m-auto flex max-h-screen max-w-screen-sm flex-col p-4">
      <Image src={logo} alt="Steady" height={30} />

      <div className="mt-4">
        <Chat client={chatClient} theme="str-chat__theme-light">
          <Channel channel={channel} TypingIndicator={CustomTypingIndicator}>
            <Header event={getEventDetails.data?.resource} />
            <MessageList disableDateSeparator />
            <MessageInput disabled={disabled} />
          </Channel>
        </Chat>
      </div>
    </div>
  )
}
