import express from 'express';
import { inventoryRouter, userRouter } from './routes';
import { errorHandlerMiddleware } from './middleware/error';
import cookieParser from 'cookie-parser';
import { authenticateUser } from './middleware/validation';
import { ENV } from './utils/env';
import { authRouter } from './routes/auth';

const app = express();
const port = ENV.PORT;

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/inventory', authenticateUser, inventoryRouter);

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Not found' });
});

app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
