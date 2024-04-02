'use client'

import {
  Channel,
  Chat,
  LoadingIndicator,
  MessageInput,
  MessageList,
} from 'stream-chat-react'
import crypto from 'crypto'

import { type Session } from 'next-auth'

import { useChatClient } from '@/app/_hooks/useChatClient'

import { api } from '@/trpc/react'

import Clock from '@/app/_components/clock'

import 'stream-chat-react/dist/css/v2/index.css'
import '@/styles/stream.css'

const apiKey = 'mspwbbwcvzjm'

const eventDetailsInitialData = {
  start_time: '',
  end_time: '',
}

export default function DirectMessaging({ session }: { session: Session }) {
  console.log({ session })

  const email = session.user.email ?? ''

  const id = crypto.createHash('md5').update(email).digest('hex')
  const user = {
    id,
  }

  const chatClient = useChatClient({
    apiKey,
    user,
  })

  const getEventDetails = api.calendly.getEventDetails.useQuery(email)

  if (!chatClient) return <LoadingIndicator />

  const channel = chatClient.channel('messaging', {
    members: [id, 'steady'],
  })

  return (
    <div className="client-only m-auto flex max-h-screen max-w-screen-sm flex-col p-4">
      <Clock
        event={getEventDetails.data?.collection[0] ?? eventDetailsInitialData}
      />
      <Chat client={chatClient} theme="str-chat__theme-light">
        <Channel channel={channel}>
          <MessageList />
          <MessageInput />
        </Channel>
      </Chat>
    </div>
  )
}
