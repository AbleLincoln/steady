import { env } from '@/env'
import { Resend } from 'resend'

const resend = new Resend(env.AUTH_RESEND_KEY)

export default resend
