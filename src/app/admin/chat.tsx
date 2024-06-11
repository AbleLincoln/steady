'use client'

import {
  type ChannelFilters,
  type ChannelOptions,
  type ChannelSort,
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
  type ChannelPreviewUIComponentProps,
  type DefaultStreamChatGenerics,
} from 'stream-chat-react'

import { type Channel as ChannelType } from 'stream-chat'

import { DateTime } from 'luxon'
import { type Session } from 'next-auth'
import { type ReactNode } from 'react'

import Clock from '@/app/_components/clock'

import { useChatClient } from '@/app/_hooks/useChatClient'

import '@/styles/stream.css'
import 'stream-chat-react/dist/css/v2/index.css'

const FALLBACK_DATE = '2024-06-03T13:20:00.000000Z'

// TODO: env vars
const apiKey = 'mspwbbwcvzjm'
// const userToken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3RlYWR5In0.f0SOafAIFs9T8XDEYrlrHxEMLEceTFtFxEDKiH5CK2Y'

const sort: ChannelSort = { start_time: 1 }
const options: ChannelOptions = {
  limit: 10,
}

interface AdminChatPropTypes {
  user: Session['user']
  token: string
}

export default function AdminChat({ user, token }: AdminChatPropTypes) {
  const userId = getUserId(user)

  const chatClient = useChatClient({
    apiKey,
    user: {
      id: userId,
      image: user.image,
    },
    tokenOrProvider: token,
  })

  const filters: ChannelFilters = {
    type: 'messaging',
    members: { $in: [userId] },
    start_time: { $gt: DateTime.now().startOf('day').toISO() },
  }

  if (!chatClient) return <Loading />

  return (
    <Chat client={chatClient} theme="str-chat__theme-light">
      <ChannelList
        filters={filters}
        sort={sort}
        options={options}
        Preview={ChannelPreview}
        renderChannels={renderChannels}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onMessageNewHandler={() => {}}
        EmptyStateIndicator={EmptyStateIndicator}
      />

      <Channel>
        <Window>
          <Header />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  )
}

function EmptyStateIndicator() {
  return (
    <div className="flex justify-center items-center">
      <p>You have no upcoming meetings</p>
    </div>
  )
}

function getUserId(user: Session['user']) {
  // maybe throw an error if it doesnt work but for now do fallback
  return user.email?.split('@')[0] ?? 'steady'
}

function Loading() {
  return (
    <div className="flex grow items-center justify-center">
      <LoadingIndicator size={80} color="rgb(143, 148, 239)" />
    </div>
  )
}

function renderChannels(
  channels: ChannelType<DefaultStreamChatGenerics>[],
  getChannelPreview: (
    item: ChannelType<DefaultStreamChatGenerics>,
  ) => ReactNode,
) {
  console.log({ channels })

  const days: ChannelType[][] = [[]]

  if (channels[0]) days[0]?.push(channels[0])

  for (let i = 1; i < channels.length; i++) {
    const prev = channels[i - 1]
    const curr = channels[i]

    if (!prev || !curr) break

    // TODO: timezone stuff

    const prevDt = DateTime.fromISO(
      (prev.data?.start_time as string) ?? FALLBACK_DATE,
    )
    const currDt = DateTime.fromISO(
      (curr.data?.start_time as string) ?? FALLBACK_DATE,
    )

    if (!currDt.hasSame(prevDt, 'day')) {
      // make a new day

      days.push([])
    }

    days.at(-1)?.push(curr)
  }

  return days.map((events) => {
    const date = DateTime.fromISO(
      (events[0]?.data?.start_time as string) ?? FALLBACK_DATE,
    ).toFormat('EEEE, MMMM d')

    return (
      <div key={date}>
        <div className="bg-gray-100 px-4 py-2 font-bold">{date}</div>
        {events.map(getChannelPreview)}
      </div>
    )
  })
}

function ChannelPreview({
  channel,
  displayTitle,
  activeChannel,
  setActiveChannel,
}: ChannelPreviewUIComponentProps) {
  const startTime =
    (channel.data?.start_time as string) ?? '2024-06-03T13:20:00.000000Z'

  const dt = DateTime.fromISO(startTime)

  const isSelected = channel.id === activeChannel?.id

  const hasUnread = channel.countUnread()

  return (
    <div
      className={`relative mx-3 my-2 cursor-pointer rounded border px-4 py-4 ${isSelected ? 'border-steady-pink' : 'hover:border-steady-pink/40'}`}
      onClick={() => setActiveChannel?.(channel)}
    >
      {hasUnread ? (
        <>
          <span className="absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-steady-green"></span>
          <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-steady-green"></span>
        </>
      ) : (
        ''
      )}
      <div>
        <span className="font-medium">{dt.toFormat('t')}</span> - {displayTitle}
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="flex justify-between rounded-t-xl border-b border-black bg-white px-3 py-2">
      <ChannelHeader />
      {/* <Clock /> */}
    </header>
  )
}
