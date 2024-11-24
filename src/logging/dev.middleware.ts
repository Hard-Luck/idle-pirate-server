import { NextFunction, Request, Response } from "express";

const devMiddleware: ((
  req: Request,
  res: Response,
  next: NextFunction
) => void)[] = [];

function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`${req.method} ${req.path}`);
  next();
}
if (process.env.NODE_ENV === "development") {
  devMiddleware.push(logger);
}

export default devMiddleware;
