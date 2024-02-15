import { useEffect, useState } from 'react'
import { StreamChat } from 'stream-chat'

export type UseClientOptions = {
  apiKey: string
  userId: string
}

export const useGuestChatClient = ({
  apiKey,
  userId,
}: UseClientOptions): StreamChat | undefined => {
  const [chatClient, setChatClient] = useState<StreamChat>()

  useEffect(() => {
    console.log('helllooo')
    const client = new StreamChat(apiKey)
    // prevents application from setting stale client (user changed, for example)
    let didUserConnectInterrupt = false

    const connectionPromise = client
      .setGuestUser({ id: 'butthead', name: 'phil' })
      .then(() => {
        if (!didUserConnectInterrupt) {
          setChatClient(client)
        }
      })

    return () => {
      didUserConnectInterrupt = true
      setChatClient(undefined)
      // wait for connection to finish before initiating closing sequence
      connectionPromise
        .then(() => client.disconnectUser())
        .then(() => {
          console.log('connection closed')
        })
        .catch((err) => console.error(err))
    }
  }, [apiKey, userId])

  return chatClient
}
