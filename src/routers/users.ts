import { Router } from "express";
import { findUser } from "../models/users";
import { log } from "console";

const usersRouter = Router();

usersRouter.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const user = await findUser(userId);
  res.status(200).json({ user });
});

export default usersRouter;
