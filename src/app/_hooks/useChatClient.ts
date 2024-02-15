import { useEffect, useState } from 'react'
import { StreamChat, type TokenOrProvider, type User } from 'stream-chat'
import uuid from 'short-uuid'

export type UseClientOptions = {
  apiKey: string
  user?: User
  tokenOrProvider?: TokenOrProvider
}

export const useChatClient = ({
  apiKey,
  user,
  tokenOrProvider,
}: UseClientOptions): StreamChat | undefined => {
  const [chatClient, setChatClient] = useState<StreamChat>()

  useEffect(() => {
    const client = new StreamChat(apiKey)
    // prevents application from setting stale client (user changed, for example)
    let didUserConnectInterrupt = false

    const connectionPromise = user
      ? client
          .connectUser(user, tokenOrProvider ?? client.devToken(user.id))
          .then(() => {
            if (!didUserConnectInterrupt) {
              setChatClient(client)
            }
          })
          .catch((err) => {
            console.error(err)
            // TODO: 404
            return null
          })
      : client.setGuestUser({ id: uuid.generate() }).then(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps -- should re-run only if user.id changes
  }, [apiKey, user?.id, tokenOrProvider])

  return chatClient
}
