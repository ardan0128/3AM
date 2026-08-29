import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';
import memberRouter from './modules/member/route.ts';
import teamRouter from './modules/team/route.ts';
import { corsOptions } from './config/cors.ts';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(cors(corsOptions));

app.use(express.json());
app.use('/', memberRouter);
app.use('/', teamRouter);

export default app;
