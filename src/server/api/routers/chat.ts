import { z } from 'zod'
import twilio from 'twilio'

import { createTRPCRouter, publicProcedure } from '../trpc'

const accountSid = 'AC73037fea0bf87727515b968946e7e86e'
const authToken = '62d005e193fe3977b16586710135ec17'

const twilioClient = twilio(accountSid, authToken)

export const chatRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        phone: z.string(),
        message: z.string(),
      }),
    )
    .mutation(({ input }) => {
      twilioClient.messages
        .create({
          body: input.message,
          from: '+18448953643',
          to: '+18777804236',
        })
        .then((message) => console.log(message.sid))
        .catch((error) => console.error(error))
    }),
})
