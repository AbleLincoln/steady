'use client'

import Image from 'next/image'
import {
  Channel,
  ChannelHeader,
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

import logo from 'public/steady-logo-green.png'
import Header from './_header'

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

  if (!chatClient) return <LoadingIndicator />

  const channel = chatClient.channel('messaging', {
    members: [id, 'steady'],
  })

  return (
    <div className="client-only m-auto flex max-h-screen max-w-screen-sm flex-col p-4 pt-10">
      <Image src={logo} alt="Steady" height={30} />

      <div className="mt-4">
        <Chat client={chatClient} theme="str-chat__theme-light">
          <Channel channel={channel}>
            <Header event={getEventDetails.data?.collection[0]} />
            <MessageList />
            <MessageInput />
          </Channel>
        </Chat>
      </div>
    </div>
  )
}
