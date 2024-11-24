import { NextFunction, Request, Response } from "express";

function handle500Error(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("Error occurred:", err);
  res.status(500).send("An error occurred");
}

const errorMiddleware = [handle500Error];

export default errorMiddleware;
