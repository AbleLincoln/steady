import { postRouter } from '@/server/api/routers/post'
import { preregRouter } from '@/server/api/routers/prereg'
import { calendlyRouter } from '@/server/api/routers/calendly'
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  prereg: preregRouter,
  calendly: calendlyRouter,
  getTodos: publicProcedure.query(async () => {
    return [10, 20, 30]
  }),
})

// export type definition of API
export type AppRouter = typeof appRouter
