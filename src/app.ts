import express, { Request, Response, NextFunction } from "express";
import passport from "passport";
import session from "express-session";
import "./auth/passport";
import { ensureAuthenticated } from "./auth/passport";

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/auth/discord", passport.authenticate("discord"));

app.get(
  "/auth/discord/callback",
  passport.authenticate("discord", { failureRedirect: "/" }),
  (req: Request, res: Response) => {
    res.redirect("/");
  }
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(ensureAuthenticated);

app.get("/protected", (req: Request, res: Response) => {
  res.send("Protected route");
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Error occurred:", err);
  res.status(500).send("An error occurred");
});

export default app;
