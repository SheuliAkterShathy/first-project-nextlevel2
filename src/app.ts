/* eslint-disable no-unused-vars */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes/index';
const app: Application = express();

// parses
app.use(express.json());
app.use(cors());

// applications routes
app.use('/api/v1', router);

const test = (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
};
app.get('/', test);

app.use(globalErrorHandler);

// Not Found
app.use(notFound);

export default app;
