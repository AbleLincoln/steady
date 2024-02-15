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

import 'stream-chat-react/dist/css/v2/index.css'
import '@/styles/stream.css'

const apiKey = '8h84kz5uqyhp'

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

  if (!chatClient) return <LoadingIndicator />

  const channel = chatClient.channel('messaging', {
    members: [id, 'steady'],
  })

  return (
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
  )
}
