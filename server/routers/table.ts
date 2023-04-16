import { publicProcedure, router } from '../trpc';
import { prisma } from '../prismaClient';
import { z } from 'zod';

const addTableSchema = z.object({
  name: z.string(),
  columns: z.string().default('[]'),
  api: z.string().optional(),
  selector: z.string().optional(),
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
  updateTable: publicProcedure
    .input(z.object({ id: z.number(), data: addTableSchema.partial() }))
    .mutation(({ input }) => {
      return prisma.table.update({
        where: {
          id: input.id,
        },
        data: input.data,
      });
    }),
});
