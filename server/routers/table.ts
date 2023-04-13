import { publicProcedure, router } from '../trpc';
import { prisma } from '../prismaClient';

export const TableRouter = router({
  getTables: publicProcedure.query(() => {}),
});
