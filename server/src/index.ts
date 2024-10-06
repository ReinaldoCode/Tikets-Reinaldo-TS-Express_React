import express from 'express';
import { userRouter } from './routes';
import { errorHandlerMiddleware } from './middleware/error';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/v1/users', userRouter);

app.use("*", (req, res) =>{
  res.status(404).json({msg: 'Not found'})
})

app.use(errorHandlerMiddleware)

app.listen(port, () => {
  console.log(`App running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
