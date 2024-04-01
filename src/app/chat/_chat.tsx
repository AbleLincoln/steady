'use client'

import {
  Channel,
  ChannelHeader,
  Chat,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react'
import crypto from 'crypto'

import { type Session } from 'next-auth'

import { useChatClient } from '@/app/_hooks/useChatClient'

import { api } from '@/trpc/react'

import Clock from './_clock'

import 'stream-chat-react/dist/css/v2/index.css'
import '@/styles/stream.css'

const apiKey = 'mspwbbwcvzjm'

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
  console.log(getEventDetails.data)

  if (!chatClient) return <LoadingIndicator />

  const channel = chatClient.channel('messaging', {
    members: [id, 'steady'],
  })

  return (
    <div className="m-auto max-w-screen-sm">
      <Clock event={getEventDetails.data?.collection[0]} />
      <Chat client={chatClient} theme="str-chat__theme-light">
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  )
}
