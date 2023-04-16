import { publicProcedure, router } from '../trpc';
import { prisma } from '../prismaClient';
import { z } from 'zod';

const addTableSchema = z.object({
  tableName: z.string(),
  columns: z.string(),
});

export const TableRouter = router({
  getTables: publicProcedure.query(() => {
    return prisma.table.findMany();
  }),
  addTable: publicProcedure.input(addTableSchema).mutation(({ input }) => {
    return prisma.table.create({
      data: input,
    });
  }),
  viewTable: publicProcedure.input(z.number()).query(({ input }) => {
    return prisma.table.findFirst({
      where: {
        id: input,
      },
    });
  }),
});
