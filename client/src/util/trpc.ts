import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../../../server/_app';
import { inferRouterOutputs } from '@trpc/server';
export const trpc = createTRPCReact<AppRouter>();

type RouterOutput = inferRouterOutputs<AppRouter>;

export type TablesOutput = RouterOutput['table']['getTables'];
