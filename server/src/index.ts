import express, { Request, Response } from "express";
import userRouter from "./routes/User_Routes";

const app = express();
const port = 3000;


app.use(express.json());

app.use('/api/v1/user',userRouter)

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
