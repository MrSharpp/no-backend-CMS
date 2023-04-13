import { publicProcedure, router } from './trpc';

export const appRouter = router({
  greeting: publicProcedure.query(() => {
    console.log('called');
    return 'hello tRPC v10!';
  }),
});

export type AppRouter = typeof appRouter;
