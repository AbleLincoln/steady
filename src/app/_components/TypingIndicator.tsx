import {
  useChannelStateContext,
  useChatContext,
  useMessageListContext,
  useTypingContext,
  type TypingIndicatorProps,
} from 'stream-chat-react'

export default function CustomTypingIndicator(props: TypingIndicatorProps) {
  const { scrollToBottom, listElement } = useMessageListContext()

  const { threadList } = props

  const { channelConfig, thread } = useChannelStateContext()
  const { client } = useChatContext()
  const { typing = {} } = useTypingContext()

  if (channelConfig?.typing_events === false) {
    return null
  }

  const typingInChannel = !threadList
    ? Object.values(typing).filter(
        ({ parent_id, user }) => user?.id !== client.user?.id && !parent_id,
      )
    : []

  const typingInThread = threadList
    ? Object.values(typing).filter(
        ({ parent_id, user }) =>
          user?.id !== client.user?.id && parent_id === thread?.id,
      )
    : []

  if (!typingInChannel.length && !typingInThread.length) {
    listElement?.classList.remove('typing')
    return null
  }

  scrollToBottom()

  return (
    <div
      className={`str-chat__typing-indicator ${
        (threadList && typingInThread.length) ??
        (!threadList && typingInChannel.length)
          ? 'str-chat__typing-indicator--typing'
          : ''
      }`}
      style={{ position: 'relative' }}
    >
      <div className="str-chat__typing-indicator__dots">
        <div className="str-chat__typing-indicator__dot" />
        <div className="str-chat__typing-indicator__dot" />
        <div className="str-chat__typing-indicator__dot" />
      </div>
    </div>
  )
}
