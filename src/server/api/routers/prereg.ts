import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'

export const preregRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(
      z.object({
        email: z.string().email('Please enter a valid email address'),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.preReg.upsert({
        where: {
          email: input.email,
        },
        create: {
          email: input.email,
        },
        update: {},
      })
    }),
})
