import { StreamChat } from 'stream-chat'

const apiKey = 'mspwbbwcvzjm'
const apiSecret = process.env.STREAM_SECRET

// Initialize a Server Client
export default StreamChat.getInstance(apiKey, apiSecret)
