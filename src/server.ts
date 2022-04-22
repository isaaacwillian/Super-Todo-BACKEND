import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/userRouter";
import dataRouter from "./routes/dataRouter";

const app = express();

app.use(
  cors({
    origin: [
      "https://super-todo-frontend-isaaacwillian.vercel.app",
      "https://super-todo-frontend-git-master-isaaacwillian.vercel.app",
      "https://super-todo-frontend.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URL as string, (err) => {
  if (err) console.log(err);
  console.log("Connected to database");
});

app.use("/user", userRouter);
app.use("/data", dataRouter);

app.listen(process.env.PORT || 3333, () => console.log("Server is running"));
