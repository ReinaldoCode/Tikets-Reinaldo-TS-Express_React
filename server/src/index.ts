import express from 'express';
import { userRouter } from './routes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/v1/users', userRouter);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
