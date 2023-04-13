import { publicProcedure, router } from './trpc';
import { TableRouter } from './routers/table';

export const appRouter = router({
  greeting: publicProcedure.query(() => {
    console.log('called');
    return 'hello tRPC v10!';
  }),
  table: TableRouter,
});

export type AppRouter = typeof appRouter;
