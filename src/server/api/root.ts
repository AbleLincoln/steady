import { postRouter } from '@/server/api/routers/post'
import { chatRouter } from '@/server/api/routers/chat'
import { preregRouter } from '@/server/api/routers/prereg'
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  chat: chatRouter,
  prereg: preregRouter,
  getTodos: publicProcedure.query(async () => {
    return [10, 20, 30]
  }),
})

// export type definition of API
export type AppRouter = typeof appRouter
