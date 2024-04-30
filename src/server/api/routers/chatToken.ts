import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'

export const chatTokenRouter = createTRPCRouter({
  get: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    return ctx.db.chatToken.findUnique({ where: { id: input } })
  }),
})
