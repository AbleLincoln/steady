import { env } from '@/env'
import { StreamChat } from 'stream-chat'

const apiKey = env.NEXT_PUBLIC_STREAM_KEY
const apiSecret = env.STREAM_SECRET

// Initialize a Server Client
export default StreamChat.getInstance(apiKey, apiSecret)
