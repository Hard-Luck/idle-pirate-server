import { Router } from "express";
import usersRouter from "./users";
import { ensureAuthenticated } from "../auth/passport";

const apiRouter = Router();

apiRouter.use("/users", ensureAuthenticated, usersRouter);

export default apiRouter;
