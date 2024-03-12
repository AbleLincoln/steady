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

import { useChatClient } from '@/app/_hooks/useChatClient'

import { api } from '@/trpc/react'

import 'stream-chat-react/dist/css/v2/index.css'
import '@/styles/stream.css'
import { useEffect } from 'react'

const apiKey = 'mspwbbwcvzjm'

export default function DirectMessaging({
  params: { userId },
}: {
  params: { userId: string }
}) {
  const id = crypto
    .createHash('md5')
    .update(decodeURIComponent(userId))
    .digest('hex')
  const user = {
    id,
  }

  const chatClient = useChatClient({
    apiKey,
    user,
  })

  const getEventDetails = api.calendly.getEventDetails.useQuery(userId)
  console.log(getEventDetails.data)

  if (!chatClient) return <LoadingIndicator />

  const channel = chatClient.channel('messaging', {
    members: [id, 'steady'],
  })

  return (
    <div className="m-auto max-w-screen-sm">
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
