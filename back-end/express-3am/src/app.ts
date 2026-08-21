import express, { type Express, type Request, type Response } from 'express';
import memberRouter from './modules/member/route.ts';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(express.json());
app.use('/api/member', memberRouter);

export default app;
