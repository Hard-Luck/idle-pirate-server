import express from "express";
import "./auth/passport";
import { authMiddleware, ensureAuthenticated } from "./auth/passport";
import apiRouter from "./routers/api";
import authRouter from "./auth/router";
import errorMiddleware from "./errors/middleware";
import devMiddleware from "./logging/dev.middleware";

const app = express();

app.use(authMiddleware);

if (process.env.NODE_ENV === "development") {
  app.use(devMiddleware);
}
app.use("/auth", authRouter);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use("/api", apiRouter);

app.use(errorMiddleware);

export default app;
