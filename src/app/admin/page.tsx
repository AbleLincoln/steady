'use client'

import {
  type ChannelFilters,
  type ChannelOptions,
  type ChannelSort,
  type User,
} from 'stream-chat'
import {
  Channel,
  ChannelHeader,
  ChannelList,
  Chat,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react'

import Quill from 'react-quill'

import { useChatClient } from '@/app/_hooks/useChatClient'

import 'stream-chat-react/dist/css/v2/index.css'
import '@/styles/stream.css'
import Notes from './_notes'

const apiKey = 'mspwbbwcvzjm'
const userToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3RlYWR5In0.f0SOafAIFs9T8XDEYrlrHxEMLEceTFtFxEDKiH5CK2Y'

const userId = 'steady'
const userName = 'steady'
const user: User = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?id=${userId}&name=${userName}`,
}

const sort: ChannelSort = { last_message_at: -1 }
const filters: ChannelFilters = {
  type: 'messaging',
  members: { $in: [userId] },
}
const options: ChannelOptions = {
  limit: 10,
}

export default function Admin() {
  const chatClient = useChatClient({
    apiKey,
    user,
    tokenOrProvider: userToken,
  })

  if (!chatClient) {
    return <LoadingIndicator />
  }

  return (
    <div className="flex grow">
      <Chat client={chatClient} theme="str-chat__theme-light">
        <ChannelList filters={filters} sort={sort} options={options} />
        <Channel>
          <Window>
            <Header />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>

      <Notes />
    </div>
  )
}

function Header() {
  return (
    <div>
      <ChannelHeader />
      {/* <Clock /> */}
    </div>
  )
}
