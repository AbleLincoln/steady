import { StreamChat } from 'stream-chat'

const apiKey = '8h84kz5uqyhp'
const apiSecret =
  '7b2dbkaz7vhpwtpdhfzek4jyeb3e9p56mtjx6zx9jte4jhrjcrgcewkjd6vcaawx'

// Initialize a Server Client
export default StreamChat.getInstance(apiKey, apiSecret)
