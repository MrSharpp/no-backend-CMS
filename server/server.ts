import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import { appRouter } from './_app';
import cors from 'cors';

const app = express();
app.use(cors(0));

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);
app.listen(4000);
console.log('app has started listeing');
