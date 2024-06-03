'use client'

import Image from 'next/image'
import {
  Channel,
  Chat,
  LoadingIndicator,
  MessageInput,
  MessageList,
} from 'stream-chat-react'

import { useChatClient } from '@/app/_hooks/useChatClient'

import { api } from '@/trpc/react'

import 'stream-chat-react/dist/css/v2/index.css'
import '@/styles/stream.css'

import logo from 'public/steady-logo-green.png'
import Header from './header'

const apiKey = 'mspwbbwcvzjm'

export default function DirectMessaging({
  user,
  event,
}: {
  user: string
  event: string
}) {
  console.log({ user, event })

  const chatClient = useChatClient({
    apiKey,
    user: {
      id: user,
    },
  })

  const getEventDetails = api.calendly.getEventDetails.useQuery(event)

  if (!chatClient) return <LoadingIndicator />

  const channel = chatClient.getChannelById('messaging', event, {})

  return (
    <div className="client-only m-auto flex max-h-screen max-w-screen-sm flex-col p-4 pt-10">
      <Image src={logo} alt="Steady" height={30} />

      <div className="mt-4">
        <Chat client={chatClient} theme="str-chat__theme-light">
          <Channel channel={channel}>
            <Header event={getEventDetails.data?.resource} />
            <MessageList />
            <MessageInput />
          </Channel>
        </Chat>
      </div>
    </div>
  )
}
